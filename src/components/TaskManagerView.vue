<template>
<v-container>

  <v-layout justify-center>
    <div style="width: 75%">
      <h1
        class="display-3 grey--text text--darken-1 smooth-mtop mono"
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

  <div
    class="mt-3"
    v-if="tasks.length"
    style="margin-bottom: 80px"
  >
    <v-subheader>Using&nbsp;<strong class="underline mono">First Come First Serve (FCFS)</strong>:</v-subheader>
    <task-bar-view :tasks="tasks"/>
    <v-subheader class="mt-2">Using&nbsp;<strong class="underline mono">Shortest Job First (SJF)</strong>:</v-subheader>
    <task-bar-view
      is-sorted
      :tasks="tasks"
    />
  </div>

  <footer-view/>

</v-container>
</template>

<script>
import dynamicColors from '@/assets/js/dynamicColors'
import TaskView from '@/include/TaskView'
import TaskBarView from '@/include/TaskBarView'
import FooterView from '@/include/FooterView'

export default {
  name: 'task-manager-view',
  components: {
    TaskView,
    TaskBarView,
    FooterView
  },
  
  data: () => ({
    tasks: [],
    varHeight: '0px'
  }),

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

<style scoped>
.underline {
  border-bottom: 3px solid #757575
}
</style>
