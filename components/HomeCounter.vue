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
        initial: {
            type: Number,
            required: true
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
