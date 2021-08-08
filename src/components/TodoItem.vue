<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">{{ title }}</div>
      <div class="todo-item-content-description">{{ description }}</div>
      <button @click="editMode = true" class="app-button is-warning">
        Edit
      </button>
      <button @click="deleteTodo" class="app-button is-danger">Delete</button>
    </div>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input v-model="todo.title" class="form-input" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea
          v-model="todo.description"
          class="form-input"
          cols="30"
          rows="3"
        ></textarea>
      </div>

      <button @click.prevent="editTodo" class="app-button is-warning">update</button>
      <button @click.prevent="editMode = false" class="app-button is-danger">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import store from '@/store'
export default {
  // props:['title','description']
  props: {
    title: {
      type: String,
      required: true,
      default: "default title",
    },
    description: {
      type: String,
      required: true,
      default: "default",
    },
    _id:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      todo:{
        _id:this._id,
        title: this.title,
        description:this.description,
      }
    };
  },
  methods: {
    editTodo() {
      store.dispatch('updateTodo',{...this.todo})
      this.editMode = false
    },
    deleteTodo() {
      store.dispatch('deleteTodo',this.todo._id)
    },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  font-size: 15px;
  &.is-warning {
    margin-right: 5px;
  }
}
.todo {
  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    &-content {
      margin-bottom: 10px;
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>