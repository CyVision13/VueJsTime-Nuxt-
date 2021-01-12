<template>
<div>
    <h1>search</h1>
    <ul>
        <li v-for="(item,index) in getParams" :key="index">{{item}}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: "search",
    beforeMount(){
        console.log('query',this.$route.query);
    },
    mounted() {
        console.log(this.$route.params);
    },
    computed: {
        getParams() {
            return this.$route.params.pathMatch.split('/')
        }
    }
}
</script>

<style>

</style>
