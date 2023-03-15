<template>
  <div>
    <center>
      <h1>Counter: {{ counter }}</h1>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
      <input type="number" v-model="value">
      <button @click="setValue(value)">Set to Value</button>
    </center>
  </div>
</template>

<script>


export default {
computed: {
 counter(){
  return this.$store.getters.counter
 }
},

methods: {
  increment() {
    this.$store.dispatch('increment')
  },
  decrement() {
    this.$store.dispatch('decrement')
  },
  reset(){
    this.$store.dispatch('reset')
  },
  setValue(value) {
    this.$store.dispatch("setValue", parseInt(value))
  }
},

data() {
  return {
    value: "",
  };
}
  
}
</script>

<style>

</style>
