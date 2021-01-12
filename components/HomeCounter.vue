<template>
<div>
    <p>Counter is {{counter}}</p>
    <p>initial Counter is {{initial}}</p>
    <button @click="counter++">plus</button>
</div>
</template>

<script>
export default {
    // props:[
    //     'initial'
    // ],
    props: {
        defaultInitialValue:{
            type:Number,
            required:true
        },
        initial: {
            type: Number,
            // required: true,
            // default:13
            default(){
                return this.defaultInitialValue
            }
        }
    },
    data() {
        return {
            counter: this.initial
        }
    }

}
</script>

<style>

</style>
