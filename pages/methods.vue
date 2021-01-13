<template>
  <div>
    <h1>methods</h1>
    {{ getComputedCounter }}
    <div @click="updateCounter">update counter {{ counter }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    updateCounter() {
      this.counter++;
    },
  },
  computed: {
    getComputedCounter() {
      return this.counter * 2;
    },
  },
};
</script>

<style></style>
