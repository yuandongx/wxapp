<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>