<template>
  <div class="m-list">
    <el-menu @select="handleMenuSelected">
      <template v-for="(level1, index1) in dataList" :key="index1">
        <el-sub-menu :index="String(level1.id)">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>{{ level1.name }}</span>
          </template>
          <template v-for="(level2, index2) in level1.children" :key="index2">
            <el-menu-item :index="String(level2.id)">{{ level2.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { watch, computed, ref, toRaw } from 'vue'
import { Location } from '@element-plus/icons-vue'

const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['select'])


function  handleMenuSelected(id) {
  emits('select', id)
}
</script>

<style lang="less" scoped>
.m-list {}
</style>