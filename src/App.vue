<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router';

const activeIndex = ref('/flow')
const route = useRoute();

// 监听路由变化，更新导航菜单的选中状态
watch(() => route.path, (path) => {
  activeIndex.value = path
})

</script>

<template>
  <div class="main">
    <div class="nav">
      <!-- 导航菜单 -->
      <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" router>
        <RouterLink class="logo" to="/flow">
          <img src="@/assets/img/logo.png">
          <span>水务云平台</span>
        </RouterLink>
        <div class="flex-grow" />
        <el-menu-item index="/flow">流水查询</el-menu-item>
        <el-menu-item index="/cost">费用查询</el-menu-item>
        <el-menu-item index="/log">操作日志</el-menu-item>
        <el-menu-item index="/schedule">定时任务</el-menu-item>
        <el-menu-item index="/trans">历史抄收</el-menu-item>
        <el-menu-item index="/hispay">历史缴费</el-menu-item>
      </el-menu>
    </div>
    <!-- 主要页面 -->
    <div class="content">
      <router-view />
    </div>
    
  </div>
</template>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

.main {
  display: flex;
  height: 100%;
  flex-direction: column;

  .nav {
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;

      img {
        width: 25px;
        height: 25px;
      }

      span {
        margin-left: 10px;
        font-weight: 600;
      }
    }
  }

  .content {
    flex: 1;
  }
}

:deep(.el-menu--horizontal) {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
