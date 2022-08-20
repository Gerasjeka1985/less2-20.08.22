<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const myValue = computed({
  get() {
    return props.modelValue;
  },
  set(value?: string) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input
    v-model="myValue"
    type="text"
    placeholder="some text"
    class="addTask__input addInput"
  />
</template>
