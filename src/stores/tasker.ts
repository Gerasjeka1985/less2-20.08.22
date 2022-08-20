import { defineStore } from 'pinia';
import axios from 'axios';



interface tasksRequest{
  id:string,
  name: string,
  is_finished:boolean
}

interface State{
  listOfTasks:tasksRequest[]
  listOfClosedTasks:tasksRequest[]
}

export const useTaskerStore = defineStore({
  id: 'tasker',
  state: function(){
    return{
      listOfTasks:[],
      listOfClosedTasks:[],
  } as State
},
  getters: {
    //почему не сортируется пока не включить консоль разраба?
    getState: (state) => state.listOfTasks.sort((prev,next)=>{
      if(prev["is_finished"] < next["is_finished"]){
        return -1
      }
      else if(prev["is_finished"] > next["is_finished"]){
        return 1
      }
      else{
        return 0
      }
    }),
    getStateColapse:(state)=> state.listOfClosedTasks
  },
  actions: {
    //метод получения всех задач с сервера
    async getTasks(){
      try{
        this.$state.listOfTasks = await axios.get<tasksRequest[]>("http://127.0.0.1:8080/tasks")
          .then((resp) => resp.data);
      }catch(err){
        console.log(err);
      }
    },
    async createTask(taskDiscr:string ){
      try{
         await axios.post('http://127.0.0.1:8080/tasks',{
            "name": `task : ${taskDiscr}` 
        })
          .then(resp => this.$state.listOfTasks.push(resp.data))
        
        
        }catch(err){
          console.log(err);
      }
    },
    async  delTask(id:string ){
      try{
        this.$state.listOfTasks = await axios.delete(`http://127.0.0.1:8080/tasks/${id}`)
        .then(() => this.listOfTasks.filter(task => task.id !== id))
        
      }catch(err){
        console.log(err)
      }    
    },
    async toggle(id: string){
      await axios.patch(`http://127.0.0.1:8080/tasks/${id}`)
    },
    moveElem(id:string){
      console.log("done");
      const currEl = this.$state.listOfTasks.filter(task => task.id == id);
      this.$state.listOfTasks.shift(currEl[0])
      this.$state.listOfClosedTasks.push(currEl[0])
    },
    backToList(id:string){
      const currEl = this.$state.listOfTasks.filter(task => task.id == id);
      console.log(currEl[0])
      this.$state.listOfClosedTasks.filter(task => task == currEl[0])
      this.$state.listOfTasks.push(currEl[0])
      this.getState
    }
  }
})
