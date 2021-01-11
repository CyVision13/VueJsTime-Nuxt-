<template>
  <div>
      <p>Counter is {{counter}}</p>
      <button @click="counter++">plus</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            counter :0
        }
    }
}
</script>

<style>

</style>