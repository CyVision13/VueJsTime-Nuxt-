<template>
  <div>
    <h1>nuxt middleware</h1>
  </div>
</template>

<script>
export default {
//   middleware: ["auth"],
    fetch(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log('Fetch Resolved');
                resolve(true)
            },1000)
        })
    }
};
</script>

<style></style>
