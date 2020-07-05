import VueRouter from 'vue-router'
import TasksList from './components/TasksList'
import AddTask from './components/AddTask'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: TasksList
        },
        {
            path: '/add',
            component: AddTask,
        },
        {
            path: '/edit/:id',
            component: AddTask
        },
    ]
})