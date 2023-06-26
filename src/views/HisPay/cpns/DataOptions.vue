<template>
  <div class="opt-warp">
    <div class="left-opt">
      <el-input v-model="address" placeholder="地址区域" />
      <el-input v-model="deviceCode" placeholder="设备编码" />
      <el-input v-model="userCode" placeholder="用户名" />
      <el-input v-model="username" placeholder="用户编码" />
      <el-date-picker v-model="timeRange" type="datetimerange" range-separator="到" start-placeholder="开始时间"
        end-placeholder="结束时间" @calendar-change="handleCalendarChange" />
      <el-button @click="handleConditionQuery">查询</el-button>
    </div>
    <div class="right-opt">
      <el-button type="primary" plain @click="handleOutput">导出</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useHisPayStore from '@/stores/modules/his-pay'
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { saveCSV } from '@/utils'

const hisPayStore = useHisPayStore();
const {
  address,
  deviceCode,
  userCode,
  username,
  startTimestamp,
  endTimestamp
} = storeToRefs(hisPayStore)

const timeRange = ref([new Date(startTimestamp.value), new Date(endTimestamp.value)])

const handleConditionQuery = () => {
  hisPayStore.page = 1
  hisPayStore.fetchHisPayList()
}

// 选择时间事件
const handleCalendarChange = (val) => {
  if (val[0] && val[1]) {
    hisPayStore.startTimestamp = val[0].getTime()
    hisPayStore.endTimestamp = val[1].getTime()
  }
}

// 导出事件
const handleOutput = () => {
  let title = '历史缴费信息'
  let head = [
    '用户名',
    '设备编码',
    '用户编码',
    '详细地址',
    '用户类型',
    '价格模式',
    '支付方式',
    '账户余额(元)',
    '充值余额(元)',
    '结余(元)',
    '充值状态',
    '抄收时间',
  ]
  saveCSV(title, head, hisPayStore.selections).then(() => {
    ElMessage.success('导出成功')
  })
}


</script>

<style lang="less" scoped>
.opt-warp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  .left-opt {
    flex: 1;
    display: flex;

    .el-input {
      width: 100px;
      margin-right: 10px;
    }

    .el-button {
      margin-left: 10px;
    }
  }

  .right-opt {
    width: 20%;
    text-align: right;
    padding-right: 20px;
  }
}
</style>