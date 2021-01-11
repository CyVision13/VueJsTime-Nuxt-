<template>
<div class="container">
    <div>

        <home-header></home-header>
        <home-counter></home-counter>
    </div>
</div>
</template>

<script>
import HomeCounter from '../components/HomeCounter.vue'
export default {
  components: { HomeCounter },}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
