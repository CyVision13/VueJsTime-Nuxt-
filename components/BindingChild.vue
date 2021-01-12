<template>
  <div>
      <h1>binding child</h1>
      <div>attrs is : {{$attrs}}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs:false,
  props:['a'],
}
</script>

<style>

</style>