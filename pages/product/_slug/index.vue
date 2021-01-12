<template>
  <div>
      <h1>product</h1>
      <div>slug is : {{this.$route.params.slug}}</div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params);
  }
}
</script>

<style>

</style>