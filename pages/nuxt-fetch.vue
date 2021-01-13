<template>
  <div>
    <h1>nuxt fetch</h1>
    <div v-if="loading">loading...</div>
    <dir v-else-if="$fetchState.error">{{ $fetchState.error.message }}</dir>
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
        const statusCode = e?.response?.status; // --  ? is optional chaining
        const message = e?.response?.statusText || "Oops Error.";
        if (process.server) {
          this.$nuxt.context.res.statusCode = statusCode;
        }

        this.loading = false;
        // this.$nuxt.error({statusCode,message}) to err page
        throw new Error(`${messsage} )${statusCode}`); // showing this err in this page not in err page
      });
  },
  data() {
    return {
      title: "",
      loading: false,
    };
  },
};
</script>

<style></style>
