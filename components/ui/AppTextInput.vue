<template>
  <div>
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      v-on="{ ...$listeners, input }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
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
