import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

function reset() {
  count.value = 0;
}

function setValue(value) {
  count.value = parseInt(value);
}

export default {
  count,
  increment,
  decrement,
  reset,
  setValue
};
