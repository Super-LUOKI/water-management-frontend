<template>
  <div class="flow-query content-warp">
    <div class="left">
      <div class="title">所有区域</div>
      <multi-list :data-list="regionList" @select="handleRegionSelectd" />
    </div>
    <div class="right">
      <!-- 查询和操作 -->
      <data-options />
      <!-- 内容部分 -->
      <div class="content">
        <!-- 表格 -->
        <content-table />
        <!-- 分页 -->
        <div class="pagination-warp">
          <el-pagination :page-size="pageCount" :pager-count="9" layout="prev, pager, next" :total="total" background
            small @current-change="handleCurrentPageChanged" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import MultiList from '@/components/MultilayerList/index.vue'
import DataOptions from './cpns/DataOptions.vue'
import ContentTable from './cpns/ContentTable.vue'

import { storeToRefs } from 'pinia';
import useRegionStore from '@/stores/modules/region'
import useCostStore from '@/stores/modules/cost'


// 发起网络请求
const regionStore = useRegionStore()
regionStore.fetchAllRegions()

const costStore = useCostStore()
costStore.fetchCostList()

const { regionList } = storeToRefs(regionStore)
const { pageCount, total } = storeToRefs(costStore)


// 城市选择事件
const handleRegionSelectd = (id) => {
  costStore.$reset()
  costStore.regionId = id
  costStore.fetchCostList()
}

const handleCurrentPageChanged = (val) => {
  costStore.page = val
  costStore.fetchCostList()
}

</script>

<style lang="less" scoped>
.flow-query {
  box-sizing: border-box;
  padding-top: 20px;
  // background-color:pink;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 30px;

  .left {
    box-sizing: border-box;
    width: 250px;

    .title {
      text-align: center;
      font-size: 15px;
      font-weight: 700;

    }
  }

  .right {
    flex: 1;
    padding-left: 20px;
    box-sizing: border-box;


    .table-warp {}

    .pagination-warp {
      margin-top: 20px;
    }
  }
}
</style>