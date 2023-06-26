<template>
  <div class="opt-warp">
    <div class="left-opt">
      <el-input v-model="watcherNum" placeholder="水表编号" />
      <el-button @click="handleConditionQuery">查询</el-button>
    </div>
    <div class="right-opt">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useTaskStore from '@/stores/modules/schedule-task';
import { storeToRefs } from 'pinia';
import {saveCSV} from '@/utils'

const taskStore = useTaskStore();
const { collCode, watcherNum } = storeToRefs(taskStore)


const handleConditionQuery = () => {
  taskStore.$patch({
    watcherNum: watcherNum.value,
    page:1
  })
  taskStore.fetchTaskList()
}

// 导出事件
// const handleOutput = () => {
//   let title = '流水信息'
//   let head = ['用户名','门牌号','设备编码','结算流量(m³)','累计流量(m³)','上月使用(m³)','水表余额(元)','设备状态','操作时间',]
//   saveCSV(title, head, flowStore.selections).then(() => {
//     console.log('success')
//   })
// }


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
      width: 200px;
      margin-right: 10px;
    }
  }

  .right-opt {
    width: 20%;
    text-align: right;
    padding-right: 20px;
  }
}
</style>