<script setup>
import { CloseBold, Edit, Plus } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from 'element-plus';
import { storeToRefs } from "pinia";
import $http from '../../utils/http';
import { useDataStore } from "../../stores/dataStore.js";

const dialogFormVisible = ref(false);
const dataStore = useDataStore();
const { taskList } = storeToRefs(dataStore);
const taskForm = reactive({
  user: '',
  description: '',
  isCompleted: false,
});

onMounted(() => {
  dataStore.fetchTasksData();
})

const addTask = () => {
  taskForm.user = localStorage.getItem('gt-username');
  console.log(taskForm);
  dialogFormVisible.value = false;
  $http.post('/api/tasks', taskForm).then(response => {
    ElMessage({
      message: response.data.message,
      type: 'success',
    })
  }).then(_ => {
    window.location.reload();
  }).catch(error => {
    console.error(error);
    ElMessage({
      message: error.response.data.message,
      type: 'error',
    })
  })
};

const handleChecked = (task) => {
  $http.put('/api/tasks', task).then(response => {
    ElMessage({
      message: response.data.message,
      type: 'success',
    });
  }).catch(error => {
    console.error(error);
    ElMessage({
      message: error.response.data.message,
      type: 'error',
    })
  })
}

const deleteTask = (t) => {
  console.log(123);
  ElMessageBox.confirm(
    'The data will be permanently deleted. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  ).then(_ => {
    $http.delete(`/api/tasks?id=${t._id}`).then(response => {
      ElMessage({
        message: response.data.message,
        type: 'success',
      });
    }).then(_ => {
      dataStore.taskListDelete(t._id);
    }).catch(error => {
      ElMessage({
        message: error.response.data.message,
        type: 'error',
      });
    })
  })
};
</script>

<template>
  <el-card class="box-card">
    <el-dialog v-model="dialogFormVisible" title="Task" width="500">
      <el-form :model="taskForm">
        <el-form-item label="Content" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="taskForm.description" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="addTask">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
    <template #header>
      <div class="card-header">
        <span>Tasks({{ taskList.length }})</span>
        <div class="flex-grow"></div>
        <el-button type="primary" :icon="Plus" @click="dialogFormVisible = true">Add</el-button>
      </div>
    </template>
    <el-scrollbar height="40vh">
      <div class="todo-content" v-for="t in taskList" :key="t._id">
        <el-checkbox style="flex:1;" v-model="t.isCompleted" @change="handleChecked(t)" />
        <div style="flex: 6;">
          <el-text :tag="t.isCompleted ? 'del' : 'bold'">
            {{ t.description }}
          </el-text>
        </div>
        <div style="flex: 1;">
          <el-button type="danger" link @click="deleteTask(t)">Delete</el-button>
        </div>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-content {
  display: flex;
  border-bottom: 1px solid #e4e7ed;
}
</style>
