<script setup lang="ts">
import { RouterView } from "vue-router";
import AddTaskComp from "@/components/AddTaskComp.vue";
import TaskClosed from "./components/TaskClosed.vue";
</script>

<template>
  <TaskClosed></TaskClosed>
  <div class="tasks-container tasks">
    <p>To Do App</p>
    <add-task-comp></add-task-comp>
    <hr />
    <suspense>
      <RouterView />
    </suspense>
  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 40px;
  line-height: 46px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
