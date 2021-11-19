<demo>
示例
</demo>
<template>
  <Button @click="toggle">点击展示</Button>
</template>
<script lang="ts">
import {openPopUp} from "../lib/openPopUp";
import Button from "../lib/button.vue"

export default {
  components: {Button},
  setup() {
    const toggle = () => {
      openPopUp({
        title: "演示一下",    //title必须传其余选传
        style: {
          color: "yellow", backgroundColor: "orange",
          top: "35vh", right: 0
        }
      })
    }
    return {toggle}
  }
}
</script>