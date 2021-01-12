<template>
  <div>
      <h1>child</h1>
      <hr>
      <provide-child-nested></provide-child-nested>
  </div>
</template>

<script>
import ProvideChildNested from './ProvideChildNested.vue'
export default {
  components: { ProvideChildNested },

}
</script>

<style>

</style>