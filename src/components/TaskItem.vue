<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const myBool = computed({
  get() {
    return props.modelValue;
  },
  set(value?: boolean) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <li>
    <input type="checkbox" v-model="myBool" />
    <slot></slot>
  </li>
</template>

<style scoped lang="scss">
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding-left: 10px;
  width: 490px;
  height: 55px;
  margin-top: 10px;
  background: #dbe2ef;
  border-radius: 5px;
}
</style>
