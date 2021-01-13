<template>
  <div>
    <h1>nuxt fetch</h1>
    <div v-if="loading">loading...</div>
    <p v-else>
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  fetch() {
    this.loading = true;
    return this.$axios
      .$get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        this.title = res.title;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.loading = false;
      });
  },
  data() {
    return {
      title: "",
      loading:false
    };
  },
};
</script>

<style></style>
