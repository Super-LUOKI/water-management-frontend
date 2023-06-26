<template>
  <div class="table-warp">
    <el-table :data="hisTransList" stripe border :row-style="{ height: '35px' }" :cell-style="{ padding: '5px' }"
      style="font-size: 12px" show-overflow-tooltip @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="username" label="用户名" width="80" />
      <el-table-column prop="house_number" label="门牌号" />
      <el-table-column prop="device_code" label="设备编码" />
      <el-table-column prop="settle_flow" label="结算流量(m³)" />
      <el-table-column prop="total_flow" label="累计流量(m³)" />
      <el-table-column prop="last_month_flow" label="上月使用(m³)" />
      <el-table-column prop="balance" label="水表余额(元)" />
      <el-table-column prop="battery_voltage" label="电池电压(V)" />
      <el-table-column prop="status" label="设备状态" width="90" />
      <el-table-column label="抄收时间">
        <template #default="{ row }">
          <span>{{ formatDate(row.collected_at) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="latest_31_day_usage" label="31日使用量" width="90" />
    </el-table>

    <!-- 对话框 -->
    <!-- <el-dialog v-model="dialogVisible" title="流量曲线" width="50%">
      <el-image style="width: 100%; height: 100%" :src="flowImgUrl" fit="contain" />
      <template #footer>
        <el-button @click="dialogVisible = false">确定</el-button>
      </template>
    </el-dialog> -->
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import useHisTranStore from '@/stores/modules/his-trans'
import { formatDate } from '@/utils'
import { useGetDerivedNamespace } from 'element-plus';

const hisTranStore = useHisTranStore()

const { hisTransList } = storeToRefs(hisTranStore)

// const dialogVisible = ref(false)
// 流量曲线
// const flowImgUrl = ref('')

// 查看流量详情
// const handleShowFlowImg = (row) => {
//   console.log(row);
//   flowImgUrl.value = row.flow_chart_url
//   dialogVisible.value = true
// }

// 选择列表条目改变事件
const handleSelectionChange = (selection) => {
  console.log('selection', selection);

  hisTranStore.selections = selection.map(item => {
    return [
      item.username,
      item.house_number,
      item.device_code,
      item.settle_flow,
      item.total_flow,
      item.last_month_flow,
      item.balance,
      item.battery_voltage,
      item.status,
      formatDate(item.collected_at),
      item.latest_31_day_usage
    ]
  })
}
</script>

<style lang="less" scoped>
.table-warp {
  font-size: 12px;
}
</style>