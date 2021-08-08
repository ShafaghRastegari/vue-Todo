<template>
  <Modal :close="forceClose">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input v-model="form.title" class="form-input" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea
          v-model="form.description"
          class="form-input"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="app-error">
        <div class="form-error">
          {{ formError }}
        </div>
      </div>
      <button @click="submitForm" type="button" class="app-button is-primary">
        confirm
      </button>
    </form>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      forceClose: false,
      formError: "",
    };
  },
  computed: {
    isFormValid() {
      if (this.form.title.length > 8 && this.form.description.length > 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.formError = "";
        this.$emit("formSubmited", { ...this.form });
        this.forceClose = true;
        this.$nextTick(() => (this.forceClose = false));
        this.resetForm();
      } else {
        this.formError =
          "Form Error! Title needs to be longer than 8 char and description longer than 10 char";
      }
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
    },
  },
};
</script>

<style scoped>
.form-error {
  margin: 10px 0;
}
</style>