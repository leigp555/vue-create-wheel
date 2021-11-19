<demo>
示例一
</demo>
<template>
  <div class="example">
    <Button @click="toggle" level="main">点击演示</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel">
      <template v-slot:title>
        <h3>标题</h3>
      </template>
      <template v-slot:content>
        <p>内容一</p>
        <p>内容二</p>
      </template>
    </Dialog>
    <!--closeOnClickOverlay="false" 那么点击遮罩层对话框不会关闭-->
    <!--ok,cancel可以选择性传值，默认返回值为true-->
  </div>
</template>
<script lang="ts">
import Dialog from '../../lib/dialog.vue'
import {ref} from "vue";
import Button from "../../lib/button.vue"
export default {
  components: {Dialog,Button},
  setup() {
    const visible = ref(false)
    const toggle=()=>{
      visible.value=!visible.value
    }
    const ok=()=>{
      return false
    }
    //ok函数返回false点击确定是不会关闭，用于检查某些信息是否已经填写
    const cancel=()=>{
      return true
    }
    //cancel函数与ok函数用法相同
    return {visible,toggle,ok,cancel}
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