<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList :todos="todos" />
        <div class="todo-create-btn-container">
          <TodoCreate @formSubmited="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoCreate from "./components/TodoCreate.vue";
import TodoList from "./components/TodoList.vue";
import store from './store/index'
export default {
  name: "app",
  components: {
    TodoList,
    TodoCreate,
  },
  created(){
    this.todos = store.dispatch('initStore')
  },
  data() {
    return {
      todos: store.state.todos
    }
  },
  methods: {
    createTodo(todo) {
      store.dispatch('createTodo',todo)
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app-error {
  color: red;
}

.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .form-input {
    padding: 10px;
    font-size: 17px;
  }
  .form-control {
    margin-bottom: 10px;
  }
  .form-input {
    padding: 10px;
    font-size: 17px;
  }
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &.is-primary {
    background-color: greenyellow;
  }
  &.is-warning {
    background-color: #ffa753;
  }
  &.is-danger {
    background-color: #ff5a5a;
  }
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  &-create-btn-container {
    margin: 10px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    min-height: 200px;
    background-color: #ededed;
    border-radius: 5px;
  }
}
</style>
