<template>
  <div id="app">
    <section class="todoapp">
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </section>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }

}
</script>

<style>

</style>
