<template>
<div>
    <h1>nested child</h1>
    <div>count is : {{count}}</div>
</div>
</template>

<script>
export default {
    inject: ['count']
}
</script>

<style>

</style>
