<script setup lang="ts">
import { useTaskerStore } from "@/stores/tasker";
import { computed } from "vue";
import TaskItem from "./TaskItem.vue";
import CustomButton from "@/customComponents/CustomBtn.vue";

const store = useTaskerStore();
await store.getTasks();
const listOfTasks = computed(() => store.listOfTasks);

//анимация движения блока

// function moveElems(event: any) {
//   const currElem = event.target;
//   const taskElem = currElem.parentElement;
//   console.log(taskElem);
//   taskElem.style.position = "absolute";
//   taskElem.style.zIndex = 1000;
//   document.body.append(taskElem);
//   moveAt(event.pageX, event.pageY, taskElem);

//   document.addEventListener("mousemove", (event) => {
//     taskElem.style.left = event.pageX - taskElem.offsetWidth / 2 + "px";
//     taskElem.style.top = event.pageY - taskElem.offsetHeight / 2 + "px";
//   });

//   taskElem.onmouseup = function () {
//     console.log("dropped");
//     document.removeEventListener("mousemove", (event) => {});
//     taskElem.onmouseup = null;
//   };
// }

// function moveAt(pageX: number, pageY: number, elem: any) {}

//конец описания анимации
</script>

<template>
  <transition-group name="list" tag="ul">
    <TaskItem
      v-for="task in listOfTasks"
      :key="task.id"
      v-model="task.is_finished"
      @click="store.toggle(task.id)"
    >
      <div class="task-discr">
        {{ task.name }}
      </div>
      <custom-button @mouseup="store.moveElem(task.id)" class="Colapse-task">
        Colapse
      </custom-button>
      <custom-button class="btn-del" @click="store.delTask(task.id)"
        >-</custom-button
      >
    </TaskItem>
    <div v-if="listOfTasks.length <= 0" class="no-tasks">
      Steel no tasks here
    </div>
  </transition-group>
</template>

<style scoped lang="scss">
//время продолжительности анимации ввода/вывода
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-out;
}
//.list-enter-from,.list-leave-to
//обеспечивает плавность анимации перехода ввода/вывода
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
//.list-leave-active  помогает вставать элиментам плавн на место удаленных
.list-leave-active {
  position: absolute;
}
.btn-del {
  width: 67px;
  height: 55px;
  left: calc(50% - 67px / 2 + 189.5px);
  top: 194px;
  color: #dbe2ef;
  background: #3f72af;
  border-radius: 0px 5px 5px 0px;
}

.task-discr {
  width: 340px;
  height: 20px;
}

.no-tasks {
  margin-top: 20px;
}

.Colapse-task {
  font-size: 11px;
  cursor: pointer;
  background: #3f72af;
  color: aliceblue;
  padding: 2px;
  border-radius: 6px;
  border: 2px solid #284a73;
}
.Colapse-task .active {
  display: none;
}
</style>
