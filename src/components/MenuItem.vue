<template>
  <el-sub-menu :index="dataItem.key" v-if="dataItem.subItems != undefined"
  >
    <template #title>
      <el-icon>
        <location/>
      </el-icon>
      <span>{{ dataItem.name }}</span>
    </template>
    <menu-item
        :data-item="item"
        v-for="item in dataItem.subItems"
        :key="item.key"
    >
      <template #title>{{ item.name }}</template>
    </menu-item>
  </el-sub-menu>
  <el-menu-item :index="dataItem.key" v-else>
    <el-icon>
      <Location />
    </el-icon>
    <template #title>{{ dataItem.name }}</template>
  </el-menu-item>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import { Location } from '@element-plus/icons-vue'
export default defineComponent({
  name: "MenuItem",
  components: {
    Location
  },
  props: {
    dataItem: {
      type: Object,
      default: () => {
      },
    },
  },
});
</script>
