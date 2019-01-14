<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @keyup.enter="addTodo"
      v-model="todoName">
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    addTodo () {
      // console.log(this.todoName)
      if (this.todoName === '') {
        return false
      }
      this.$store.commit('addTodo', {
        name: this.todoName
      })
      this.todoName = ''
    }
  }

}
</script>

<style>

</style>
