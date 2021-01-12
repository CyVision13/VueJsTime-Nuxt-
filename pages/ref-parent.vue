<template>
  <div>
    <h1>ref-parent</h1>
    <ref-parent-child ref="myRef">watchwatch</ref-parent-child>
    <button @click="resetChild">reset from parent</button>
  </div>
</template>

<script>
import RefParentChild from "../components/RefParentChild.vue";
export default {
  components: { RefParentChild },
  beforeMount(){
    
  },
  methods: {
    resetChild() {
      this.$refs.myRef.reset();
    }
  },

};
</script>

<style></style>
