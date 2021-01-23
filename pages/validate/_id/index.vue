<template>
  <div>
    <h1>validate</h1>
  </div>
</template>

<script>
export default {
  validate({ params, error }) {
    error({ statusCode: 500, message: "خطایی رخ داده است" }); //fkn reverse!
    return /^\d+$/.test(params.id)
    
  },
  asyncData(){
    console.log('async data executed');
  }
};
</script>

<style></style>
