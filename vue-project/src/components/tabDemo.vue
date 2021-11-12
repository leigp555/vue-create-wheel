<template>
  <div>
    <Tabs>
      <Tab title="页面一">内容一</Tab>
      <Tab title="页面一">内容二</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Tab from '../lib/tab.vue'
import Tabs from '../lib/tabs.vue'
export default {
  components:{Tab,Tabs}
}
</script>