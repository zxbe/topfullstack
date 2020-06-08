<template>
  <el-container direction="horizontal">
    <el-aside width="200px">
      <el-menu>
        <el-menu-item-group>
          <template #title>用户</template>
          <el-menu-item index="1" :path="{ name: 'home' }">
            <i class="el-icon-menu"></i>
            用户管理
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template #title>运营</template>
          <el-menu-item index="1" :path="{ name: 'operate' }">
            <i class="el-icon-menu"></i>
            运营管理
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
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
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup
} from '@/components'

export default defineComponent({
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMenu,
    ElMain,
    ElMenuItem,
    ElMenuItemGroup
  }
})
</script>

<style>
.demo {
  height: 100vh;
}
</style>