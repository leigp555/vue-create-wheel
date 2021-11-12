<template>
  <div>
    <Button @click="toggle">Toggle</Button>
  <Dialog v-model:visible="visible" :ok="ok" :close-on-click-overlay="false">
    <template v-slot:title>
       <div>标题</div>
    </template>
    <template v-slot:content>
      <h4>填写</h4>
      <input type="text" />
    </template>
  </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/dialog.vue'
import Button from '../lib/button.vue'
import {ref} from "vue";
export default {
  components:{Dialog,Button},
  setup(){
    const visible=ref(false)
    const toggle=()=>{
      visible.value=!visible.value
    }
    const ok=()=>{
      return true
    }
    return {visible,toggle,ok}
  }
}
</script>