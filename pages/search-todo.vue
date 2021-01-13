<template>
  <div>
    <h1>search-todo</h1>
    <input type="text" :value="title" @input="onInput" />
    <p v-if="loading">loading...</p>
    <ul v-else>
      <li v-for="(item, key) in list" :key="key">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch() {
    return await this.service();
  },
  data() {
    return {
      title: "",
      list: [],
      loading: false,
    };
  },
  methods: {
    service() {
      this.loading = true;
      return this.$axios
        .$get("https://jsonplaceholder.typicode.com/todos", {
          params: {
            title_like: this.title,
          },
        })
        .then((res) => {
          this.list = res;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    onInput(e) {
      this.title = e.target.value;
      this.service();
    },
  },
};
</script>

<style></style>
