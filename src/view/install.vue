<template>
  <article class="markdown-body" v-html="Install">
  </article>
</template>
<script lang="js">
import Install from "../markdown/install.md"
export default {
  setup(){
    return {Install}
  }
}
</script>

<style lang="scss" scoped>
.markdown-body {
  background-color: #fffdf1;
  padding: 20px;

  > code {
  }
}
</style>