<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
    <div>
      <input
        type="text"
        v-bind="$attrs"
        :value="value"
        v-on="{ ...$listeners, input }"
      />
    </div>
    <div v-if="errors && errors.length > 0">{{ errors[0] }}</div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: { ValidationProvider },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      defualt: "",
    },
    rules: {
      type: String,
      default: "",
    },
  },
  methods: {
    input(e) {
      // short hand method
      this.$emit("input", e.target.value);
    },
    
  },
};
</script>

<style></style>
