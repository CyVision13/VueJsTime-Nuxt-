<template>
<div>
    <h1>c;ass and style binding</h1>
    <div @click="toggle" 
     
    :class="[{active:isActive},z]"
    class="binding">binding</div>

    <div :style="{color:red}"> 
        style binding
    </div>
     <!-- <div :style="isActive? 'color:white' : ''"> 
        style binding
    </div> -->
    <hr>
    <binding-child a="a" b="b"></binding-child>
</div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style>
.binding {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
}

.active {
    background: aqua;
}
</style>
