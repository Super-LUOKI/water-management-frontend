<template>
  <div class="table-warp">
    <el-table :data="flowList" stripe border :row-style="{ height: '40px' }" :cell-style="{ padding: '5px' }"
      style="font-size: 12px" show-overflow-tooltip @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="username" label="用户名" width="100" />
      <el-table-column prop="house_number" label="门牌号" />
      <el-table-column prop="device_code" label="设备编码" />
      <el-table-column prop="settle_flow" label="结算流量(m³)" />
      <el-table-column prop="total_flow" label="累计流量(m³)" />
      <el-table-column prop="last_month_flow" label="上月使用(m³)" />
      <el-table-column prop="balance" label="水表余额(元)" />
      <el-table-column prop="status" label="设备状态" width="90" />
      <el-table-column prop="created_at" label="操作时间">
        <template #default="{ row }">
          <span>{{ formatDate(row.created_at) }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleShowFlowImg(scope.row)">查看详情</el-button>
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
import useFlowStore from '@/stores/modules/flow-query'
const flowStore = useFlowStore()

const { flowList } = storeToRefs(flowStore)

const dialogVisible = ref(false)
// 流量曲线
const flowImgUrl = ref('')

const formatDate = (timestamp) => {
  const date = new Date(Number(timestamp))
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// 查看流量详情
const handleShowFlowImg = (row) => {
  console.log(row);
  flowImgUrl.value = row.flow_chart_url
  dialogVisible.value = true
}

// 选择列表条目改变事件
const handleSelectionChange = (selection) => {
  flowStore.selections = selection.map(item => {
    return [
      item.username,
      item.house_number,
      item.device_code,
      item.settle_flow,
      item.total_flow,
      item.last_month_flow,
      item.balance,
      item.status,
      formatDate(item.created_at),
    ]
  })
}
</script>

<style lang="less" scoped>
.table-warp {
  font-size: 12px;
}
</style>