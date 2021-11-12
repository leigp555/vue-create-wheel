<template>
  <div>
    <Tabs>
      <Tab >页面一</Tab>
      <Tab>页面二</Tab>
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