<template>
<div>
  <v-subheader>{{ title }}</v-subheader>
  <code
    style="width: 100%"
    class="pa-3"
  >{{ text || 'None' }}</code>
</div>
</template>

<script>
export default {
  name: 'output-view',
  props: {
    value: String,
    title: String
  },
  data: () => ({
    text: null
  }),

  watch: {
    value(e) {
      this.text = e
    },
    text(e) {
      this.$emit('input', e)
    }
  },

  created() {
    this.text = this.value
  }
}
</script>
