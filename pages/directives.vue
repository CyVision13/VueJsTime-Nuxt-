<template>
<div>
    <h1>directives</h1>

    <ul>
        <template v-for="(item,index) in list">
            <li v-show="item.id!==2" :key="index">{{index }}: {{item.productName}}</li> 
            <!-- v-show is better that v-if especially in v-for loop! -->
            <!-- <li v-if="item.id!==2" :key="index">{{index }}: {{item.productName}}</li>  -->
        </template>
        
        
    </ul>
    <ul>
        <h3>we can use computed or methods instead of v-if like line blow</h3>
        <template v-for="(item,index) in filterList">
            <li :key="index">{{index }} : {{item.productName}}</li>        
        </template>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                    id: 1,
                    productName: 'samsung-s8'
                },
                {
                    id: 2,
                    productName: 'samsung-s10'
                },
                {
                    id: 3,
                    productName: 'Honor20X'
                },
                {
                    id: 4,
                    productName: 'Xiaomi Note 8 Pro'
                }
            ]
        }
    },
    computed:{
        filterList(){
            return this.list.filter((item)=> item.id !== 2)
        }
    }
}
</script>

<style>

</style>
