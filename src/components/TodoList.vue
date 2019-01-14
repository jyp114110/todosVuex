<template>
  <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li :class="{completed:item.done, editing:item.id === editId}"
            v-for="item in  $store.state.list" :key="item.id">
          <div class="view">
          <!--
            Vuex 中的数据无法使用 v-model 通过双向数据绑定机制来修改！
            因为 Vuex 中的数据，只能通过 mutations 中提供的方法来修改，而不能通过其他方式来修改

            解决方式：
              1 使用单项数据绑定 :checked 属性来设置复选框的选中状态
              2 绑定change事件，在事件中调用 mutations 提供的方法，来修改数据
          -->
            <input
              class="toggle"
              type="checkbox"
              :checked="item.done"
              @change="changeTodoState(item.id)">
            <label @dblclick="showEdit(item.id)">{{item.name}}</label>
            <button class="destroy" @click="delTodo(item.id)"></button>
          </div>
          <input
            class="edit"
            :value="item.name"
            @keyup.enter="hideEdit"
            @input="updateTodo($event,item.id)">
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  data () {
    return {
      editId: -1
    }
  },

  methods: {
    changeTodoState (id) {
      this.$store.commit('changeTodoState', {id})
    },
    showEdit (id) {
      this.editId = id
    },
    hideEdit () {
      this.editId = -1
    },
    updateTodo (e, id) {
      this.$store.commit('updateTodo', {
        value: e.target.value,
        id
      })
    },
    delTodo (id) {
      this.$store.commit('delTodo', {
        id
      })
    }
  }

}
</script>

<style>

</style>
