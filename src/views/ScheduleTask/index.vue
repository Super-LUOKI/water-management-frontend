<template>
  <div class="base-warp content-warp schedule-task">

    <!-- 查询和操作 -->
    <data-options />
    <!-- 内容部分 -->
    <div class="content">
      <!-- 表格 -->
      <content-table />
      <!-- 分页 -->
      <div class="pagination-warp">
        <el-pagination :page-size="pageCount" :pager-count="9" layout="prev, pager, next" :total="total" background small
          @current-change="handleCurrentPageChanged" />
      </div>
    </div>


  </div>
</template>

<script setup>
import DataOptions from './cpns/DataOptions.vue'
import ContentTable from './cpns/ContentTable.vue'

import { storeToRefs } from 'pinia';
import useTaskStore from '@/stores/modules/schedule-task'


// 发起网络请求
const taskStore = useTaskStore()
taskStore.fetchTaskList()

const { pageCount, total } = storeToRefs(taskStore)


const handleCurrentPageChanged = (val) => {
  taskStore.page = val
  taskStore.fetchTaskList()
}

</script>

<style lang="less" scoped>
.base-warp {
  padding: 30px;
  box-sizing: border-box;
  padding-top: 20px;
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 30px;

  .table-warp {}

  .pagination-warp {
    margin-top: 20px;
  }
}
</style>