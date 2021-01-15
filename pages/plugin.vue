<template>
  <div>
    <h1>plugin</h1>
  </div>
</template>

<script>
export default {
  fetch() {
    console.log("fetch ");
    this.$myTestPlugin.test();
  },
  asyncData({$myTestPlugin}) {
    console.log("asyncData");
    $myTestPlugin.test();
  },
};
</script>

<style></style>
