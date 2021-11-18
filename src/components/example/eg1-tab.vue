<demo>
Tab展示
</demo>
<template>
  <div>
    <Tabs v-model:selected="tab">
      <Tab title="页面一">内容一</Tab>
      <Tab title="页面二">内容二</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Tab from '../../lib/tab.vue'
import Tabs from '../../lib/tabs.vue'
import {ref} from "vue";
export default {
  components:{Tab,Tabs},
  setup(){
    const tab=ref("页面一")
    return {
      tab
    }
  }
}
</script>