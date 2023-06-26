<template>
  <div class="table-warp">
    <el-table :data="costList" stripe border :row-style="{ height: '40px' }" :cell-style="{ padding: '5px' }"
      style="font-size: 12px" show-overflow-tooltip @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="username" label="用户名" width="100" />
      <el-table-column prop="user_code" label="用户编码" />
      <el-table-column prop="phone_number" label="电话号码" />
      <el-table-column prop="account_balance" label="账本余额" />
      <el-table-column prop="consumed_amount" label="已消费" />
      <el-table-column prop="arrears_balance" label="欠费余额" />
      <el-table-column label="最后账期">
        <template #default="{ row }">
          <span>{{ formatDate(row.last_billing_date) }}</span>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import useCostStore from '@/stores/modules/cost'
import { formatDate } from '@/utils'
const costStore = useCostStore()

const { costList } = storeToRefs(costStore)

// 选择列表条目改变事件
const handleSelectionChange = (selection) => {
  costStore.selections = selection.map(item => {
    return [
      item.username,
      item.user_code,
      item.phone_number,
      item.account_balance,
      item.consumed_amount,
      item.arrears_balance,
      formatDate(item.last_billing_date),
    ]
  })
}
</script>

<style lang="less" scoped>
.table-warp {
  font-size: 12px;
}
</style>