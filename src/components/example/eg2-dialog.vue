<demo>
快速引用
</demo>
<template>
  <div>
    <Button @click="showDialog" level="main">点击演示</Button>
  </div>
</template>
<script lang="ts">
import {openDialog} from "../../lib/openDialog.ts"
import Button from "../../lib/button.vue"
export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      console.log("执行了")
      openDialog({
        title: "标题",
        content: "内容",
        ok: () => {
          return true
        },
        cancel: () => {
          return true
        },
        closeOnClickOverlay: true
      })
    }
    return {showDialog}
  }
}
</script>

<style lang="scss" scoped>
h3{
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}
</style>