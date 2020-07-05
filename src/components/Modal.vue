<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" @click="closeModal">&times;</span>
                <h2>Подтвердите действие</h2>
            </div>
            <div class="modal-body">
                <p>Вы действительно хотите удалить заметку?</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-add" @click="deleteTask">Удалить</button>
                <button class="btn btn-add" @click="closeModal">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        closeModal() {
            this.$emit('closemodal');
        },
        deleteTask() {
            this.$emit('deletetask');
        }
    }
}


</script>

<style>
#myBtn {
  background-color: #2c3e50;
  color: white;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 180px;
}
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    position: relative;
    background-color: #fff;
    margin: auto;
    padding: 0;
    border: 5px solid #2c3e50;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
}
@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}
.close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
.modal-header {
    padding: 2px 16px;
    background-color: #2c3e50;
    color: white;
}
.modal-body {
    padding: 2px 16px;
}
.modal-footer {
    display: flex;
    align-items: center;
    padding: 20px 16px 10px 16px;
    background-color: #2c3e50;
    color: white;
}
.modal-footer .btn {
    margin-right: 16px;
}
</style>