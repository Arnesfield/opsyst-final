<template>
<v-container>

  <v-layout justify-center>
    <div style="width: 75%">
      <h1
        class="display-3 grey--text text--darken-1"
        :style="{
          'margin-top': 'calc(100vh / 2 - (78px + ' + varHeight + ' / 2))'
        }"
      ><span class="primary--text">taskmngr</span>.io</h1>
    </div>
  </v-layout>

  <v-divider/>

  <v-container grid-list-lg id="task-container">
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        :key="i"
        v-for="(task, i) in tasks"
      >
        <task-view
          class="pa-2"
          v-model="tasks[i]"
          @delete="deleteTask(i)"
        />
      </v-flex>
    </v-layout>
  </v-container>

  <v-btn
    dark
    large
    block
    color="primary"
    @click="createTask"
  >
    <v-icon>add</v-icon>
    <span>Add a task!</span>
  </v-btn>

  <div class="mt-3">
    <v-layout class="full-width">
      <template v-for="(task, i) in sorted">
        <div
          :key="i"
          style="height: 26px; display: block; width: 0%"
          :style="{
            width: (Number(task.duration) / totalDuration * 100) + '%',
            'background-color': task.color
          }"
          class="smooth-width smooth-bg-color"
        >
          <v-tooltip top>
            <v-subheader
              slot="activator"
              style="background: none; height: 26px"
              class="elevation-0 ma-0 pa-0"
              disabled
              small
            />
            <span>
              <div>{{ task.title }}</div>
              <div>{{ task.duration }} hrs</div>
            </span>
          </v-tooltip>
        </div>
      </template>
    </v-layout>
  </div>

</v-container>
</template>

<script>
import orderBy from 'lodash/orderBy'
import dynamicColors from '@/assets/js/dynamicColors'
import TaskView from '@/include/TaskView'

export default {
  name: 'task-manager-view',
  components: {
    TaskView
  },
  
  data: () => ({
    tasks: [],
    varHeight: '0px'
  }),

  computed: {
    sorted() {
      // create tasks with number duration
      let tasks = this.tasks.reduce((filtered, e) => {
        e.duration = Number(e.duration)
        filtered.push(e)
        return filtered
      }, [])
      return orderBy(tasks, ['duration'], ['asc'])
    },
    totalDuration() {
      return this.tasks.reduce((filtered, e) => filtered + Number(e.duration), 0)
    }
  },

  watch: {
    tasks(e) {
      this.setVarHeight()
    }
  },

  created() {
    this.setVarHeight()
  },

  methods: {
    createTask() {
      let task = {
        title: null,
        duration: null,
        color: dynamicColors()
      }
      this.tasks.push(task)
    },

    deleteTask(i) {
      this.tasks.splice(i, 1)
    },

    setVarHeight() {
      this.$nextTick(() => {
        let e = document.getElementById('task-container')
        this.varHeight = e ? window.getComputedStyle(e).height : '0px'
      })
    }
  }
}
</script>
