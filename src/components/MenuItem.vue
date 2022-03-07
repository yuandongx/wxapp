<template>
  <el-sub-menu :index="dataItem.key" v-if="dataItem.subItems != undefined"
    ><template #title>
      <el-icon><location /></el-icon>
      <span>{{ dataItem.name }}</span>
    </template>
    <menut-item
      :data-item="item"
      v-for="item in dataItem.subItems"
      :key="item.key"
    >
      <template #title>{{ item.name }}</template>
    </menut-item>
  </el-sub-menu>
  <el-menu-item :index="dataItem.key" v-else>
    <el-icon><icon-menu /></el-icon>
    <template #title>{{ dataItem.name }}</template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenutItem",
  props: {
    dataItem: {
      type: Object,
      default: () => {},
    },
  },
});
</script>
