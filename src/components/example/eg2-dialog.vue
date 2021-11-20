<demo>
快速引用
</demo>
<template>
  <div class="example">
    <Button @click="showDialog" level="main">点击演示</Button>
  </div>
</template>
<script lang="ts">
import {openDialog} from "../../lib/openDialog"
import Button from "../../lib/button.vue"

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
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
.example {
  >button{
    padding: 10px 10px;
    border-radius: 8px;
    font-size: 14px;
  }
}
</style>