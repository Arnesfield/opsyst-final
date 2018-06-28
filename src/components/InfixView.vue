<template>
<v-container>

  <v-layout justify-center>
    <div style="width: 75%">
      <v-layout
        align-center
        class="smooth-mtop"
        :style="{
          'margin-top': 'calc(100vh / 2 - ' + varHeight + 'px' + ')'
        }"
      >
        <h1
          class="display-3 grey--text text--darken-1 mono"
        ><span class="primary--text">infix</span>.io</h1>
        <v-spacer/>
        <div
          class="next-btn px-3 py-2"
          @click="$router.push('/tasks')"
        >view&nbsp;<span class="primary--text text--lighten-1">task manager</span>
          <v-icon>arrow_forward</v-icon>
        </div>
      </v-layout>
      <v-text-field
        solo
        ref="input"
        label="Enter infix expression here"
        v-model="infix"
        :append-icon="infix ? 'close' : undefined"
        :append-icon-cb="infix ? clear : () => {}"
      />
    </div>
  </v-layout>

  <template v-if="infix">
    <v-slide-y-transition>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 sm12 md6>
            <output-view
              title="Prefix"
              v-model="prefix"
              class="mt-2"
            />
          </v-flex>
          <v-flex xs12 sm12 md6>
            <output-view
              title="Postfix"
              v-model="postfix"
              class="mt-2"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-slide-y-transition>
  </template>

  <footer-view/>

</v-container>
</template>

<script>
import OutputView from '@/include/OutputView'
import FooterView from '@/include/FooterView'

export default {
  name: 'infix-view',
  components: {
    OutputView,
    FooterView
  },
  data: () => ({
    infix: null,
    prefix: null,
    postfix: null
  }),

  watch: {
    infix(e) {
      if (!e) {
        this.clear()
        return
      }

      this.prefix = this.$toPrefix(e)
      this.postfix = this.$toPostfix(e)
    }
  },

  computed: {
    varHeight() {
      return this.infix ? 132 : 94
    }
  },

  mounted() {
    if (this.$refs.input) {
      this.$refs.input.focus()
    }
  },

  methods: {
    clear() {
      this.infix = null
      this.prefix = null
      this.postfix = null
      if (this.$refs.input) {
        this.$refs.input.focus()
      }
    }
  }
}
</script>
