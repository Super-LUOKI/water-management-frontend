<template>
  <div class="table-warp">
    <el-table :data="taskList" stripe border :row-style="{ height: '40px' }" :cell-style="{ padding: '5px' }"
      style="font-size: 12px" show-overflow-tooltip @selection-change="handleSelectionChange">
      <el-table-column type="index" label="#" :index="(page - 1) * pageCount + 1" width="50" />
      <el-table-column prop="user_code" label="用户编码" width="100" />
      <el-table-column prop="user_name" label="用户名" />
      <el-table-column prop="water_meter_number" label="水表编号" />
      <el-table-column prop="operation_type" label="操作类型" />
      <el-table-column prop="execution_status" label="执行状态" />
      <el-table-column prop="execution_count" label="执行次数" />

      <el-table-column prop="created_at" label="创建时间">
        <template #default="{ row }">
          <span>{{ formatDate(row.created_at) }}</span>
        </template>
      </el-table-column>

      <el-table-column label="执行时间">
        <template #default="{ row }">
          <span>{{ formatDate(row.execution_time) }}</span>
        </template>
      </el-table-column>

    </el-table>

    <!-- 对话框 -->
    <el-dialog v-model="dialogVisible" title="流量曲线" width="50%">
      <el-image style="width: 100%; height: 100%" :src="flowImgUrl" fit="contain" />
      <template #footer>
        <el-button @click="dialogVisible = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import useTaskStore from '@/stores/modules/schedule-task'
import { formatDate } from '@/utils'

const taskStore = useTaskStore()

const { taskList, page, pageCount } = storeToRefs(taskStore)

</script>

<style lang="less" scoped>
.table-warp {
  font-size: 12px;
}
</style>