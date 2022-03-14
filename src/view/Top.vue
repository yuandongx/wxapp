<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    @open="handleOpen"
    mode="horizontal"
    @close="handleClose"
    text-color="#0000CD"
    background-color="#2F4F4F"
  >
  <menu-item v-for="item in menuItems" :key="item.key" :dataItem="item"/>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { menuItems } from "../common/vars/menu"
import MenuItem from "../components/MenuItem.vue";
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
      Location,
      Document,
      IconMenu,
      Setting,
      MenuItem,
  },
  setup() {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen,
      handleClose,
      menuItems,
    }
  }
})

</script>

<style scoped>

</style>