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
import useHisTranStore from '@/stores/modules/his-trans'
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { saveCSV } from '@/utils'

const hisTranStore = useHisTranStore();
const {
  address,
  deviceCode,
  userCode,
  username,
  startTimestamp,
  endTimestamp
} = storeToRefs(hisTranStore)

const timeRange = ref([new Date(startTimestamp.value), new Date(endTimestamp.value)])

const handleConditionQuery = () => {
  hisTranStore.page = 1
  hisTranStore.fetchHisTranList()
}

// 选择时间事件
const handleCalendarChange = (val) => {
  if (val[0] && val[1]) {
    hisTranStore.startTimestamp = val[0].getTime()
    hisTranStore.endTimestamp = val[1].getTime()
  }
}

// 导出事件
const handleOutput = () => {
  let title = '历史抄收信息'
  let head = [
    '用户名',
    '门牌号',
    '设备编码',
    '结算流量(m³)',
    '累计流量(m³)',
    '上月使用(m³)',
    '水表余额(元)',
    '电池电压(V)',
    '设备状态',
    '抄收时间',
    '31日使用量'
  ]
  saveCSV(title, head, hisTranStore.selections).then(() => {
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