<template>
  <div>
    <h1>life cycle methods</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("before Create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMounted");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("before Destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style></style>
