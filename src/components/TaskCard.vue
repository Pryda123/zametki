<template>
  <div class="task-card">
    <div class="task-card__wrapper">
      <router-link :to="'/edit/' + task.id">
        <h2 class="task-header">{{task.title}}</h2>
      </router-link>
      <div class="edit-buttons">
        <a class="main-item btn" href="javascript:void(0);" tabindex="1" ><img src="../assets/icons/more.png" alt=""></a> 
        <ul class="sub-menu"> 
          <li>
            <router-link :to="'/edit/' + task.id" title="Редактировать" class="btn"><img src="../assets/icons/edit.png" alt=""></router-link>
          </li> 
          <li>
            <button class="btn" @click="openModal(task.id)"><img src="../assets/icons/delete.png" alt="" title="Удалить"></button>
          </li> 
        </ul> 
      </div>
      <ul class="task-card__list">
        <li class="task-card__list-item" v-for="(point, i) in task.points" :key="i">
          <img :src="(point.checked) ? require('../assets/icons/checked.png') : require('../assets/icons/process.png')" alt="" class="task-card__check-icon">{{point.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TaskCard',
    props: ['task'],
    methods: {
      openModal(taskId) {
        this.$emit('openmodal', taskId);
      }
    }
}
</script>

<style>
.task-card {
  max-width: 25%;
  padding: 0 15px;
  margin-bottom: 15px;
  flex-grow: 1;
}
@media (max-width: 1440px) {
  .task-card {
    max-width: 33.3%;
    flex-basis: 33.3%;
  }
}
@media (max-width: 1024px) {
  .task-card {
    max-width: 50%;
    flex-basis: 50%;
  }
}
@media (max-width: 768px) {
  .task-card {
    max-width: 100%;
    flex-basis: 100%;
  }
}
.task-card__wrapper {
  position: relative;
  padding: 15px;
  border: 1px solid #D8DEF0;
  height: 100%;
}
.task-header {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 30px;
  word-break: break-all;
  color: #000;
}
.task-card__list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  word-break: break-all;
}
.task-card__check-icon {
  margin-right: 10px;
  min-width: 36px;
}
.edit-buttons {
  background: #fff;
  overflow: hidden;
  text-align: center;
  position: absolute;
  top: 15px;
  right: 5px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: 0.5s;
}
.edit-buttons:hover {
  cursor: pointer;
}
.edit-buttons .btn {
  margin-bottom: 7px;
}
.sub-menu { 
   display: none; 
   margin: 0;
} 
.main-item:focus ~ .sub-menu, 
.main-item:active ~ .sub-menu, 
.sub-menu:hover { 
   display: block; 
}
</style>