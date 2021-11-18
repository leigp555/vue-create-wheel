<template>
  <div>
    <DialogExample :component="FirstExample" title="示例一"></DialogExample>
  </div>
</template>

<script lang="ts">
import FirstExample from "./example/eg1-dialog.vue"
import DialogExample from "./dialogExample.vue"

export default {
  components: {FirstExample, DialogExample},
  setup() {
    return {FirstExample, DialogExample}
  }
}
</script>
