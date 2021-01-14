<template>
  <div>
    <h1>{{error.statusCode}}</h1>
    <h3>{{error.message}}</h3>
  </div>
</template>

<script>
export default {
    props:['error']
};
</script>

<style></style>
