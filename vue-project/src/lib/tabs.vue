<template>
  <div v-for="(item,index) in titles" :key="index">{{ item }}</div>
  <div>
    <component v-for="(item,index) in defaults" :is="item" :key="index"></component>
  </div>
</template>
<script lang="ts">
import Tab from "./tab.vue"

export default {
  components: {Tab},
  setup(props, context) {
    const {slots} = context
    const defaults = slots.default()
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("子组件类型必须是Tab")
      }
    })
    const titles = defaults.map((item) => {
      return item.props.title
    })
    return {defaults, titles}
  }
}
</script>