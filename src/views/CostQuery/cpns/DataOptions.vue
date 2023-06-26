<template>
  <div class="opt-warp">
    <div class="left-opt">
      <el-input v-model="username" placeholder="用户名" />
      <el-input v-model="usercode" placeholder="用户编码" />
      <el-button @click="handleConditionQuery">查询</el-button>
    </div>
    <div class="right-opt">
      <el-button type="primary" plain @click="handleOutput">导出</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCostStore from '@/stores/modules/cost';
import { storeToRefs } from 'pinia';
import { saveCSV } from '@/utils'
import { ElMessage } from 'element-plus';

const costStore = useCostStore();
const { username, usercode } = storeToRefs(costStore)


const handleConditionQuery = () => {
  costStore.$reset()
  costStore.fetchCostList()
}

// 导出事件
const handleOutput = () => {
  let title = '费用信息'
  let head = [
    '用户名',
    '用户编码',
    '电话号码',
    '账本余额',
    '已消费',
    '欠费余额',
    '最后账期',
  ]
  saveCSV(title, head, costStore.selections).then(() => {
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