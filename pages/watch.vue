<template>
<div>
    <h1>whats</h1>
    <button @click="count++">plus</button>
    <button @click="changeObject">change</button>
    <div>
        {{myObject}}
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            myObject: {
                child: {
                    a: 1
                }
            }
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    watch: {
        count: {
            handler(value, oldValue) {
                console.log("value", value, 'old value', oldValue);
            },
            immediate: true,
        },
        // count(value,oldValue){
        //     console.log("value",value,'old value',oldValue);
        // },
        // myObject(value){
        //     console.log('MyObject value',value);
        // },
        myObject:{
            handler(value){
                console.log('MyObject Value',value);

            },
            deep:true
        },
        'myObject.child.a'(value){
            console.log('value',value);
        }
    },
    methods: {
        changeObject() {
            this.myObject.child.a++
        }
    }
}
</script>

<style>

</style>
