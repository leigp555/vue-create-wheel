<template>
  <div>
    <h2 class="example">示例一</h2>
    <Button @click="toggle">Toggle</Button>
    <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel" :close-on-click-overlay="closeOnClickOverlay">
      <template v-slot:title>
        <h1>标题</h1>
      </template>
      <template v-slot:content>
        <h4>内容一</h4>
        <h4>内容二</h4>
      </template>
    </Dialog>
    <h2 class="example">示例二</h2>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/dialog.vue'
import Button from '../lib/button.vue'
import {ref} from "vue";
import {openDialog} from "../lib/openDialog";

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false)
    const closeOnClickOverlay=ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const ok = () => {
      return false
    }
    const cancel=()=>{
      console.log("hi")
    }
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容",
        ok,
        cancel,
        closeOnClickOverlay
      })
    }
    return {visible, toggle, ok,cancel, showDialog,closeOnClickOverlay}
  }
}
</script>
<style lang="scss" scoped>
.example{
  margin-top: 20px;
  margin-bottom: 15px;
}
</style>