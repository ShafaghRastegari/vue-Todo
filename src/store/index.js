import Vue from 'vue'
const INITIAL_DATA = {
  todos: [
        {
          _id: "1",
          title: "walk the dog",
          description: "salam manam",
        },
        {
          _id: "2",
          title: "walk the dog",
          description: "salam manam",
        },
        {
          _id: "3",
          title: "walk the dog",
          description: "salam manam",
        },
      ]
}
const store = {
    state: {
        todos:[]
    },
  actions: {
    initStore(state) {
      const todos = localStorage.getItem('my_todos')
      if (!todos) {
        Vue.set(state,'todos',INITIAL_DATA.todos)
      } else {
        Vue.set(state,'todos',JSON.parse(todos))
      }
      return state.todos
      },
        createTodo(state,todo) {
            todo._id = Math.random().toString(36).substr(2, 7)
          state.todos.push(todo)
          localStorage.setItem('my_todos',JSON.stringify(state.todos))
      },
      updateTodo(state, todoToUpdate) {
        const index = state.todos.findIndex((todo) => {
          return todo._id === todoToUpdate._id
        })
        Vue.set(state.todos, index, todoToUpdate)
        localStorage.setItem('my_todos',JSON.stringify(state.todos))
      },
      deleteTodo(state, todoId) {
        const index = state.todos.findIndex((todo) => {
          return todo._id === todoId
        })
        state.todos.splice(index, 1)
        localStorage.setItem('my_todos',JSON.stringify(state.todos))
      }
    }
}
store.dispatch = function (action, payload) {
    if (!this.actions[action]) {
        throw new Error(`Action ${action} is not defined in the store`)
    }
    return this.actions[action](this.state,payload)
}
export default store