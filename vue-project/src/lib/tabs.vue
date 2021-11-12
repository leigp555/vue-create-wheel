<template>
  tabs
  <div>
    <component v-for="(item,index) in defaults" :is="item" :key="index"></component>
  </div>
</template>
<script lang="ts">
import Tab from "./tab.vue"

export default {
  components: {Tab},
  setup(props, context) {
    const {slots}=context
    const defaults = slots.default()
    defaults.forEach((item)=>{
      if(item.type!==Tab){
        throw new Error("子组件类型必须是Tab")
      }
    })
    return {defaults}
  }
}
</script>