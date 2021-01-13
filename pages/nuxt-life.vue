<template>
  <div>
    <h1>ssr and nuxt lifeCycle methods</h1>
    {{ name }}
    {{ title }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios
      .$get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        console.log(data);
        return {
          title: data.title,
        };
      });
    return {
      title: response.title, // it will merge with our Data cz we used asyncData Method(SSR)
    };
  },
  data() {
    return {
      name: "reza",
    };
  },
};
</script>

<style></style>
