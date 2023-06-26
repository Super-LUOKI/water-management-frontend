<template>
  <div class="opt-log content-warp">

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
import useLogStore from '@/stores/modules/logs'


// 发起网络请求
const logStore = useLogStore()
logStore.fetchLogList()

const { pageCount, total } = storeToRefs(logStore)


const handleCurrentPageChanged = (val) => {
  logStore.page = val
  logStore.fetchLogList()
}

</script>

<style lang="less" scoped>
.opt-log {
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