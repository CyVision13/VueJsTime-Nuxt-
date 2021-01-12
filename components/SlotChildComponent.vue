<template>
  <div>
      <h1>dialog</h1>
      <slot></slot>

      <div class="bg-gray">
          <slot name="actionButtons" param1="param1"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-gray{
    background-color: gray;
}
</style>