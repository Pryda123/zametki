<template>
    <div class="tasks-container">
        <h2 v-if="!tasks.length" class="task-header px-15">Добавьте свою первую заметку...</h2>
        <task-card v-for="task in tasks" :key="task.id" :task="task" v-on:openmodal="openmodal"></task-card>
        <modal ref="modal" v-if="modal" v-on:closemodal="closemodal" v-on:deletetask="deletetask"></modal>
    </div>
</template>

<script>
import TaskCard from './TaskCard'
import Modal from './Modal'

export default {
    components: {
        TaskCard,
        Modal
    },
    data() {
        return {
            taskId: null,
            modal: false
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        }
    },
    methods: {
        openmodal(taskId) {
            this.modal = true;
            this.taskId = taskId;

        },
        closemodal() {
            this.modal = false;
        },
        deletetask() {
            this.$store.commit('deleteTask', this.taskId); // запускаем мутацию стейта на удаление заметки
            this.modal = false;
        }
    }
}
</script>

<style>
.tasks-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 15px;
}
@media (max-width: 500px) {
  .tasks-container {
    padding: 30px 0;
  }
}
.px-15 {
    padding-left: 15px;
    padding-right: 15px;
}
</style>