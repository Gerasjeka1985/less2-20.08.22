<script setup lang="ts">
import customButton from "@/customComponents/CustomBtn.vue";
import CustomInput from "@/customComponents/customInput.vue";
import { useTaskerStore } from "@/stores/tasker";

const store = useTaskerStore();
const defValue = "";
</script>

<template>
  <form class="addTask-container addTask">
    <custom-input v-model="defValue"></custom-input>
    <custom-button
      @click.prevent="store.createTask(defValue)"
      type="submit"
      class="addInput__btn"
      >+</custom-button
    >
  </form>
</template>
