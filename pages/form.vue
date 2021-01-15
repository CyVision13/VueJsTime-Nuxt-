<template>
  <div>
      <h1>form</h1>
      <label>firstName : </label>
      <app-text-input v-model="firstName"></app-text-input>
      <app-number-picker :minValue="3" v-model="count"></app-number-picker>
  </div>
</template>

<script>
import AppNumberPicker from '../components/ui/AppNumberPicker.vue';
import AppTextInput from '../components/ui/AppTextInput.vue';

export default {
  components: { AppTextInput, AppNumberPicker },
    data(){
        return{
            firstName:'',
            count : 1
        }
    },
    watch:{
        firstName(value){
            console.log('first name' , value);
        }
    }
}
</script>

<style>

</style>