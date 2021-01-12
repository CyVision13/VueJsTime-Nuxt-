<template>
  <div>
      <h1>slots</h1>
      <slot-child-component>
          <div class="title">dialog content</div>
          <template #actionButtons="{param1}">
              <span>{{param1}}</span>
              <button class="button1">Button 1</button>
              <button class="button2">Button 2</button>
          </template>
      </slot-child-component>
  </div>
</template>

<script>
import SlotChildComponent from '../components/SlotChildComponent.vue'
export default {

}
</script>

<style>
.title {
    color: red;
}
.button1{
    color: blue;
}
.button2 {
    color: red;
}
</style>
