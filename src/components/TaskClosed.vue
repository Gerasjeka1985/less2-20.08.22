<script setup lang="ts">
import { useTaskerStore } from "@/stores/tasker";
import { computed } from "vue";

const store = useTaskerStore();
const listOfClosedTasks = computed(() => store.listOfClosedTasks);
</script>

<template>
  <ul v-if="listOfClosedTasks.length > 0" class="folder">
    <li
      @click="store.backToList(task.id)"
      v-for="task in listOfClosedTasks"
      :key="task.id"
    >
      {{ task.name }}
    </li>
  </ul>
  <div v-else class="folder">
    Colapsed<br />
    Tasks
  </div>
</template>

<style scoped lang="scss">
.folder {
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: aliceblue;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 35px;
  min-width: 50px;
  min-height: 58px;
  border-radius: 3px 10px 3px 3px;
  background: linear-gradient(rgba(219, 226, 239, 1), rgb(2, 22, 58));
  -webkit-transition: width 2s, height 2s, background-color 2s,
    -webkit-transform 2s;
  transition: width 1.5s, height 1.5s, background-color 1s, transform 1.5s;
}
.folder:hover {
  opacity: 0.5;
  min-width: 60px;
  min-height: 68px;
  -webkit-transform: rotate(180deg);
  transform: rotate(360deg);
}

li {
  list-style-type: none;
}
</style>
