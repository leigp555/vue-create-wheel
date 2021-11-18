<demo>
示例一
</demo>
<template>
  <Button :disabled="true">禁用按钮</Button>
  <Button theme="link" :disabled="true">禁用按钮</Button>
  <Button theme="text" :disabled="true">禁用按钮</Button>
</template>
<script lang="ts">
import Button from '../../lib/button.vue'

export default {
  components: {Button}
}
</script>