<template>
  <el-container direction="horizontal">
    <el-aside width="200px">菜单</el-aside>
    <el-container>
      <el-header>全栈之巅 - 后台管理界面</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import { ElContainer, ElAside, ElHeader } from '@/components/ElContainer'

export default defineComponent({
  components: {
    ElContainer,
    ElAside,
    ElHeader
  }
})
</script>

<style>
.demo {
  height: 100vh;
}
</style>