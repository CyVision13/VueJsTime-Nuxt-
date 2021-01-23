<template>
  <div :class="{ loading: $fetchState.pending }">
    <h1>form</h1>
    <div v-show="response.title && response.body">
      <div>title</div>
      <div>{{ response.title }}</div>
      <hr />
      <div>body</div>
      <div>{{ response.body }}</div>
    </div>
    <app-form :on-submit="onSubmit" ref="form">
      <div>
        <label>title : </label>
        <app-text-input
          v-model="form.title"
          :placeholder="$t('placeholder.default', [$t('title')])"
          name="title"
          rules="required"
        ></app-text-input>
      </div>
      <div>
        <label for="">body :</label>
        <app-text-input v-model="form.body" name="body" rules="required">
        </app-text-input>
      </div>
      <div>
        <label for="">user id:</label>
        <app-text-input
          v-model="form.userId"
          type="number"
          name="userId"
          rules="required"
        >
        </app-text-input>
      </div>
      <button type="submit">Submit Form</button>
    </app-form>
  </div>
</template>

<script>
import AppNumberPicker from "./../../../../components/ui/AppNumberPicker.vue";
import AppTextInput from "./../../../../components/ui/AppTextInput.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import AppForm from "./../../../../components/ui/AppForm.vue";

extend("even", (value) => {
  return value % 2 === 0;
});
export default {
  components: {
    AppTextInput,
    AppNumberPicker,
    ValidationProvider,
    ValidationObserver,
    AppForm,
  },
  fetchOnSerrver: false,
  async fetch() {
    const response = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    );
    this.form.title = response.title;
    this.form.body = response.body;
    this.form.userId = response.userId;
  },
  data() {
    return {
      firstName: "",
      count: 1,
      number: 3,
      form: {
        title: "",
        body: "",
        userId: "",
      },
      response: {
        title: "",
        body: "",
      },
    };
  },
  watch: {
    firstName(value) {
      console.log("first name", value);
    },
  },
  methods: {
    onSubmit1() {
      alert("submit Called!");
    },
    onSubmit() {
      const cc = { ref: this.$refs.form };

      this.$axios
        .$post("https://jsonplaceholder.typicode.com/posts", this.form)
        .then((data) => {
          this.form.title = "";
          this.form.body = "";
          this.form.userId = "";
          this.$refs.form.reset();

          this.response.title = data.title;
          this.response.body = data.body;
        });
    },
  },
};
</script>

<style>
.loading {
  opacity: 0.5;
}
</style>
