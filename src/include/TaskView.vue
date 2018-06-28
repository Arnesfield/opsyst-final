<template>
<v-card>
  <v-layout>

    <div
      style="width: 24px"
      :style="{ 'background-color': value.color }"
    />

    <div class="full-width">
      
      <v-text-field
        solo
        class="elevation-0"
        v-model="value.title"
        placeholder="Title"
        prepend-icon="assignment"
        style="font-weight: bold"
        append-icon="close"
        :append-icon-cb="() => { $emit('delete') }"
      />

      <v-divider/>

      <v-text-field
        solo
        type="number"
        class="elevation-0"
        prepend-icon="timer"
        v-model="value.duration"
        placeholder="Duration (hrs)"
      />

    </div>

  </v-layout>
</v-card>
</template>

<script>
export default {
  name: 'task-view',
  props: {
    value: Object
  },

  data: () => ({
    task: null
  }),

  watch: {
    value(e) {
      this.task = e
    },

    task: {
      deep: true,
      handler(e) {
        this.$emit('input', e)
      }
    }
  },

  created() {
    this.task = this.value
  }
}
</script>
