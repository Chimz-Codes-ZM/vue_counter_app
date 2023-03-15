<template>
  <div class="counter-app">
    <h1 class="counter-title">Counter: {{ counter }}</h1>
    <div class="counter-controls">
      <button class="counter-btn increment-btn" @click="increment">+</button>
      <button class="counter-btn decrement-btn" @click="decrement">-</button>
      <button class="counter-btn reset-btn" @click="reset">Reset</button>
    </div>

    <div class="counter-controls">
      <input type="number" v-model="value" class="counter-input">
      <button class="counter-btn set-btn" @click="setValue(value)">Set to Value</button>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    reset() {
      this.$store.dispatch("reset");
    },
    setValue(value) {
      this.$store.dispatch("setValue", parseInt(value));
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
.counter-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.counter-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.counter-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.counter-btn {
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.increment-btn {
  background-color: #28a745;
}

.decrement-btn {
  background-color: #dc3545;
}

.reset-btn {
  background-color: #6c757d;
}

.set-btn {
  background-color: #007bff;
}

.counter-btn:hover {
  transform: scale(1.1);
}

.counter-input {
  font-size: 2rem;
  font-weight: bold;
  margin: 0 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  text-align: center;
  width: 150px;
  border: 2px solid black;
}
</style>
