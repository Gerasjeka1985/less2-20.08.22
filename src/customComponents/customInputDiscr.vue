<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const discrVal = computed({
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
    type="text"
    placeholder="currect task"
    class="discr-input"
    v-model="discrVal"
  />
</template>
