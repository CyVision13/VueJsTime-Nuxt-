<template>
  <div>
    <h1>ref-parent</h1>
    <ref-parent-child ref="myRef">watchwatch</ref-parent-child>
    <button @click="resetChild">reset from parent</button>
    <hr>
    <div>
      <ref-parent-child ref="myRef">watchwatch</ref-parent-child>
      <span>parent count {{parentCount}}</span>
    </div>
  </div>
</template>

<script>
import RefParentChild from "../components/RefParentChild.vue";
export default {
  components: { RefParentChild },
  data(){
    return {
      parentCount:0
    }
  },
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
