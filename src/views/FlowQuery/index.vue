<template>
  <div class="flow-query content-warp">
    <div class="left">
      <div class="title">所有区域</div>
      <el-menu default-active="2">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-2">item one</el-menu-item>
          <el-menu-item index="1-3">item one</el-menu-item>
          <el-menu-item index="1-4">item one</el-menu-item>
          <el-menu-item index="1-5">item one</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item one</el-menu-item>
          <el-menu-item index="2-3">item one</el-menu-item>
          <el-menu-item index="2-4">item one</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </div>
    <div class="right">
      <!-- 查询和操作 -->
      <div class="opt-warp">
        <div class="left-opt">
          <el-input v-model="deviceCode" placeholder="设备编码" />
          <el-input v-model="deviceCode" placeholder="用户名" />
          <el-button>查询</el-button>
        </div>
        <div class="right-opt">
          <el-button type="primary" plain>导出</el-button>
        </div>
      </div>
      <!-- 内容部分 -->
      <div class="content">
        <!-- 表格 -->
        <div class="table-warp">
          <el-table :data="tableData" stripe border>
            <el-table-column prop="date1" label="Date" />
            <el-table-column prop="name1" label="Name" />
            <el-table-column prop="address1" label="Address" />
            <el-table-column prop="date2" label="Date" />
            <el-table-column prop="name2" label="Name" />
            <el-table-column prop="address2" label="Address" />
            <el-table-column prop="date3" label="Date" />
            <el-table-column prop="name3" label="Name" />
            <el-table-column prop="address3" label="Address" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="pagination-warp">
          <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" background small />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Location
} from '@element-plus/icons-vue'

// 设备编码
const deviceCode = ref('')
// 表格示例数据
const tableData = []
for (let i = 0; i < 12; i++) {
  tableData.push(
    {
      date1: '2016-05-032016-05-032016-05-03',
      name1: 'Tom',
      address1: 'No. 189',
      date2: '2016-05-032016-05-032016-05-03',
      name2: 'Tom',
      address2: 'No. 189',
      date3: '2016-05-032016-05-032016-05-03',
      name3: 'Tom',
      address3: 'No. 189'
    }
  )
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

    .table-warp {}

    .pagination-warp {
      margin-top: 20px;
    }
  }
}
</style>