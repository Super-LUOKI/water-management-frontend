<template>
  <div class="table-warp">
    <el-table :data="logList" stripe border :row-style="{ height: '40px' }" :cell-style="{ padding: '5px' }"
      style="font-size: 12px" show-overflow-tooltip>
      <el-table-column type="index" label="#" :index="(page - 1) * pageCount + 1" width="50" />
      <el-table-column prop="log_type" label="操作类型" />
      <el-table-column prop="device_code" label="设备编码" />
      <el-table-column prop="operator" label="操作人" />
      <el-table-column label="操作时间">
        <template #default="{ row }">
          <span>{{ formatDate(row.operation_time) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ip_address" label="操作IP" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import useLogStore from '@/stores/modules/logs'
import { formatDate } from '@/utils'

const logStore = useLogStore()

const { logList, page, pageCount } = storeToRefs(logStore)

// 选择列表条目改变事件
// const handleSelectionChange = (selection) => {
//   logStore.selections = selection.map(item => {
//     return [
//       item.log_type,
//       item.device_code,
//       item.operator,
//       formatDate(item.operation_time),
//     ]
//   })
// }
</script>

<style lang="less" scoped>
.table-warp {
  font-size: 12px;
}
</style>