<template>
<v-layout class="full-width black">
  <template v-for="(task, i) in (isSorted ? sorted : numberizeTasks())">
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
          style="background: none; height: 26px; overflow: hidden"
          class="elevation-0 ma-0 pa-0 text-xs-center"
          disabled
          small
        >
          <div class="full-width">
            <span
              class="pa-2 white--text"
              style="background-color: rgba(0,0,0,0.2)"
            >{{ task.duration }}</span>
          </div>
        </v-subheader>
        <span>
          <div>{{ task.title }}</div>
          <div>{{ task.duration }} hrs</div>
        </span>
      </v-tooltip>
    </div>
  </template>
</v-layout>
</template>

<script>
import orderBy from 'lodash/orderBy'

export default {
  name: 'task-bar-view',
  props: {
    tasks: Array,
    isSorted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sorted() {
      // create tasks with number duration
      let tasks = this.numberizeTasks()
      return orderBy(tasks, ['duration'], ['asc'])
    },
    totalDuration() {
      return this.tasks.reduce((filtered, e) => filtered + Number(e.duration), 0)
    }
  },

  methods: {
    numberizeTasks() {
      return this.tasks.reduce((filtered, e) => {
        if (e.duration) {
          e.duration = Number(e.duration)
          filtered.push(e)
        }
        return filtered
      }, [])
    }
  }
}
</script>
