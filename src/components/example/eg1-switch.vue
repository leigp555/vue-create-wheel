<demo>
示例一
</demo>
<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>
<script lang="ts">
import Switch from '../../lib/switch.vue'
import {ref} from "vue";
export default {
  components: {Switch},
  setup() {
    const bool = ref(false)
    return {bool}
  }
}
</script>
