
<template>
  <div class="list_task container mt-3">
    <h1>Todo List</h1>
    <p  v-if="tasks.length === 0">Belum Ada Task</p>
    <div v-for="(task,index) in tasks" 
    class="item-task d-flex align-items-start border-bottom pt-2 pb-4"
    :key="index"
    >
      <input 
      type="checkbox"
      name="status"
      class="me-2 mt-2"
      :checked="task.isDone"
      @change="taskCompleted(index)"
      >
      <div class="d-flex flex-column">
        <div 
        :class="{ 'text-decoration-line-through': task.isDone }"
        class="title-task mb-1">
          {{ task.title }}
        </div>
        <div class="description-task small text-muted">
          {{ task.description }}
          <br>
        </div>
        <a @click="deleteTask(index)" href="#" rel="noopener noreferrer">Delete</a>
      </div>
    </div>
    <a href="#" class="add-button m-4" @click="isCreating = !isCreating">Add task</a>
    <div class="action py-2 m-3" v-if="isCreating">
      <div class="add-card mt-3"  >
        <div class="mb-2">
          <div class="card-body d-flex flex-column p-0 gap-3 ">
            <input v-model="titleValue" class="form-control border-1" placeholder="Title" type="text">
            <textarea v-model="descriptionValue" class="form-control border-1 small" placeholder="Description"
            row="3"></textarea>
          </div>
        </div>
      </div>
      <div class="button-wripper d-flex mt-4">
        <button class="btn btn-primary me-2" @click="addTask">Save</button>
        <button class="btn btn-secendary" @click="isCreating = !isCreating">Cencel</button>
      </div>
    </div>
  </div>
</template>


<script>
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  data() {
    return {
      tasks: [],
      isCreating: false,
      titleValue: '',
      descriptionValue: '',
    }
  },
  methods: {
    addTask() {
      if(this.titleValue === '' || this.descriptionValue === ''){
        alert('mohon tambahkan task terlebih dahulu')
        return
      }
      this.tasks.push ({
        title: this.titleValue,
        description: this.descriptionValue,
        isDone: false
      });
      this.titleValue = '',
      this.descriptionValue = ''
    },
    deleteTask(index){
      this.tasks.splice(index,1)
    },
    taskCompleted(index){
      this.tasks[index].isDone = !this.tasks[index].isDone
    }
  }
}
</script>
