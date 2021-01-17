<template>
  <div>
    <!-- <h1>form</h1>
    <validation-observer v-slot="{ handleSubmit, reset }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <validation-provider v-slot="{ errors }" name="number" rules="even">
        <label>number: </label>
        <app-text-input type="number" v-model="number"></app-text-input>
        <div v-if="errors && errors.length > 0">{{ errors[0] }}</div>
      </validation-provider>
      <label>firstName : </label>
      <app-text-input v-model="firstName"></app-text-input>
      <app-number-picker :minValue="3" v-model="count"></app-number-picker>
      <hr>
      <button type="button" @click="reset">reset</button>
      <button type="submit">submit form</button>
    </form>
    </validation-observer> -->

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
import AppNumberPicker from "../components/ui/AppNumberPicker.vue";
import AppTextInput from "../components/ui/AppTextInput.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import AppForm from "../components/ui/AppForm.vue";

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
      
      this.$api.$post('/post',{}).then(()=>{

      }).catch(e=>{
        if(e?.response?.status===422){
          const data = e.response.data
          for(let key in data){
            this.$refs.form.addError(key,data[key])
          }
        }
        
      })
      // this.$axios
        // .$post("https://jsonplaceholder.typicode.com/posts", this.form)
        // .then((data) => {
        //   this.form.title = "";
        //   this.form.body = "";
        //   this.form.userId = "";
        //   this.$refs.form.reset();

        //   this.response.title = data.title;
        //   this.response.body = data.body;
        // });
    },
  },
};
</script>

<style></style>
