<template>
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
</template>

<script>
import orderBy from 'lodash/orderBy'

export default {
  name: 'task-bar-view',
  props: {
    tasks: Array
  },
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
}
</script>
