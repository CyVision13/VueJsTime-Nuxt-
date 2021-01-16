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

    <app-form>
        <div>
            <label >title : </label>
            <app-text-input v-model="form.title" ></app-text-input>
        </div>
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
  },
  data() {
    return {
      firstName: "",
      count: 1,
      number: 3,
    };
  },
  watch: {
    firstName(value) {
      console.log("first name", value);
    },
  },
  methods: {
    onSubmit() {
      alert("submit Called!");
    },
  },
};
</script>

<style></style>
