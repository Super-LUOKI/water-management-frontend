<template>
  <div class="table-warp">
    <el-table :data="hisPayList" stripe border :row-style="{ height: '35px' }" :cell-style="{ padding: '5px' }"
      style="font-size: 12px" show-overflow-tooltip @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="user_name" label="用户名" width="80" />
      <el-table-column prop="device_code" label="设备编码" />
      <el-table-column prop="user_code" label="用户编码" />
      <el-table-column prop="address" label="详细地址" />
      <el-table-column prop="user_type" label="用户类型" />
      <el-table-column prop="price_mode" label="价格模式" />
      <el-table-column prop="payment_method" label="支付方式" />
      <el-table-column prop="account_balance" label="账户余额(元)" />
      <el-table-column prop="amcount_recharged" label="充值余额(元)" />
      <el-table-column prop="surplus_balance" label="结余(元)" />
      <el-table-column prop="recharge_status" label="充值状态" />
      <el-table-column label="抄收时间">
        <template #default="{ row }">
          <span>{{ formatDate(row.collected_at) }}</span>
        </template>
      </el-table-column>
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
import useHisPayStore from '@/stores/modules/his-pay'
import { formatDate } from '@/utils'

const hisPayStore = useHisPayStore()

const { hisPayList } = storeToRefs(hisPayStore)

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

  hisPayStore.selections = selection.map(item => {
    return [
      item.user_name,
      item.device_code,
      item.user_code,
      item.address,
      item.user_type,
      item.price_mode,
      item.payment_method,
      item.account_balance,
      item.amcount_recharged,
      item.surplus_balance,
      item.recharge_status,
      formatDate(item.collected_at)
    ]
  })
}
</script>

<style lang="less" scoped>
.table-warp {
  font-size: 12px;
}
</style>