<template>
  <div>
    <div v-if="$fetchState.pending">loading...</div>
    <div v-else-if="list.length > 0">
      <h1>error</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  fetch() {
    return this.$api._get("/posts").then((res) => {
      if (res!== undefined) {
        console.log("res", res);
        this.list = res;
      }
    });
  },
};
</script>

<style></style>
