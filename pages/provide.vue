<template>
<div>
    <provide-child></provide-child>
    <button @click="count++">Plus</button>
    root : {{count}}
</div>
</template>

<script>
export default {
    provide() {
        return {
            count: this.count
        }
    },
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style>

</style>
