<template>
<div>
    <button @click="pushQuery">push query</button>
    <h1>search</h1>
    <nuxt-link :to="{name:'product-slug',params:{slug:'samsung-s5'},query:{sorn:true}}">go to product</nuxt-link>
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
        // setTimeout(()=>{
        //     this.$router.push({name:'product-slug',params:{slug:'sumsong-s13'}})
        // },3313)
    },
    computed: {
        getParams() {
            return this.$route.params.pathMatch.split('/')
        }
    },
    methods:{
        pushQuery(){
            this.$router.push({query:{search_key:'samsung',brand_id:1}})
        }
    }
}
</script>

<style>

</style>
