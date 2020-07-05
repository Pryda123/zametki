<template>
    <div>
        <div class="edit-header">
            <router-link to="/" class="btn btn-back"><img src="../assets/icons/arrow_back.png" alt="" title="Назад"></router-link>
            <h3>Добавьте/Отредактируйте заметку</h3>
        </div>
        <div class="edit-form">
            <div class="title-fields">
                <h2 v-if="!showEditInput" class="task-header">{{title}}</h2>
                <div class="input-fields" v-else>
                    <label for="title" class="text-label">
                        <input type="text" id="title" class="text-input" v-model="title">
                        <span class="text-label__title">Заголовок</span>
                    </label>
                </div>
                <button class="btn" @click="changeTask" v-if="$route.params.id">
                    <img src="../assets/icons/back.png" v-if="showEditInput" title="Отменить">
                    <img src="../assets/icons/edit.png" v-else title="Редактировать">
                </button>
            </div>
            <ul class="check-list">
                <li v-for="(point, i) in points" :key="i" class="check-list__item">
                    <div class="check-fields">
                        <input type="checkbox" :id="i" :value="point.title" v-model="point.checked">
                        <label :for="i" v-if="!showEditInput">{{point.title}}</label>
                        <input type="text" v-else v-model="point.title" class="text-input">
                    </div>
                    <button class="btn" @click="deletePoint(i)"><img src="../assets/icons/delete.png" alt="" title="Удалить"></button>
                </li>
            </ul>     
            <div class="input-fields mb-30">
                <label for="point" class="text-label">
                    <input type="text" id="point" class="text-input" v-model="pointTitle" @keypress.enter="addItem">
                    <span class="text-label__title">Введите новое задание</span>
                </label>
                <button class="btn" title="Добавить задание" @click="addItem"><img src="../assets/icons/add.png" alt=""></button>
            </div>
            <button class="btn btn-submit" @click="saveTask">Сохранить</button>

            <div v-if="errorMessage">Введите заголовок заметки</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            title: null,
            points: [],
            pointTitle: null, // переменная для инпута
            errorMessage: false,
            id: null,
            showEditInput: true
        }
    },
    created() {
        if (this.$route.path != '/add') {
            this.showEditInput = false;
            this.initialState();
        } // при инициализации проверяем добавляется новая заметка или редактируется старая
    },
    methods: {
        initialState() {
            let task = this.$store.state.tasks.find(item => {
                return item.id == this.$route.params.id;
            })
            this.title = task.title;
            this.id = task.id;
            this.points = JSON.parse(JSON.stringify(task.points)); // создаем копию массива объектов, чтобы любое изменение v-model не влияло сразу на главный стейт из-за ссылочного типа объектов
        },
        saveTask() {
            if(!this.title) {
                this.errorMessage = true;
                return
            }

            let obj = {
                title: this.title,
                points: this.points
            };
            let tasks = [...this.$store.state.tasks];   

            if(!tasks.length) {
                obj.id = 1;
                this.$store.commit('addTask', obj);
            } else if(!this.id) {
                obj.id = tasks[tasks.length - 1].id + 1;
                this.$store.commit('addTask', obj);
            } else {
                obj.id = this.id;
                this.$store.commit('editTask', obj);
            } // присваиваем id заметке и записываем в стор. если заметок нет id=1, если есть, то id на единицу больше от последнего. если заметка редактируется берется ее id
            this.$router.push('/');
        },
        addItem() {
            if(!this.pointTitle) return;
        
            let obj = {
                title: this.pointTitle,
                checked: false
            };
            this.points.push(obj);
            this.pointTitle = '';
        },
        deletePoint(index) {
            this.points.splice(index, 1);
        },
        changeTask() {
            if(!this.showEditInput) {
                this.showEditInput = true;
            } else {
                this.showEditInput = false;
                this.initialState();
            } 
        } // изменение/отмена изменения заявки без сохранения
    }
}
</script>

<style>
.edit-header {
    display: flex;
    align-items: center;
    padding: 0 30px;
    background: rgb(191, 208, 225);;
}
.edit-form {
    max-width: 650px;
    padding: 30px;
}
.title-fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
input {
    border: 0;
}
.text-input {
    border: 1px solid #F1F2F3;
    border-radius: 8px;
    padding: 8px 16px;
    color: #333333;
    background-color: #F1F2F3;
    font-size: 16px;
}
.text-input:focus {
    border: 1px solid rgb(202, 222, 241);
    outline: none;
    background-color: #ffffff;
}
.text-label {
    position: relative;
}
.text-label__title {
    position: absolute;
    left: 16px;
    top: -20px;
    font-size: 13px;
    color: #999999;
}
.input-fields {
    display: flex;
    align-items: center;
}
.check-list {
    margin-bottom: 50px;
}
.check-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 10px;
}
.check-list__item input, label {
    margin-right: 10px;
    word-break: break-all;
}
.check-fields {
    display: flex;
}
.btn-back {
    padding-right: 30px;
}
.btn-submit {
    background: #2c3e50;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
}
.mb-30 {
    margin-bottom: 30px;
}
.input-fields {
    width: 100%;
}
.text-label {
    width: 100%;
}
.text-input {
    width: 100%;
}
.check-fields {
    width: 100%;
}
@media (max-width: 500px) {
    .edit-header {
        padding: 0 15px;
    }
    .edit-header h3 {
        word-break: break-all;
        font-size: 16px;
    }
    .edit-form {
        padding: 30px 15px;
    }
    .btn-back {
        padding-right: 15px;
    }
}
</style>