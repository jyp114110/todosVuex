<template>
  <footer class="footer" v-if="isShowFooter">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed"                       v-show="isShowCompleted"
      @click="clearCompleted">Clear completed</button>
    </footer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  methods: {
    clearCompleted () {
      this.$store.commit('clearCompleted')
    }
  },
  computed: {
    // { isShowFooter() {}, leftCount() {}, isShowClearCompleted() {} }
    ...mapGetters(['isShowFooter', 'leftCount', 'isShowCompleted'])
  }

}
</script>

<style>

</style>
