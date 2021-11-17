<template>
  <article class="markdown-body" v-html="Start">
  </article>
</template>
<script>
import Start from "../markdown/get-started.md"
export default {
  setup(){
    return {Start}
  }
}
</script>


<style lang="scss" scoped>
.markdown-body {
  background-color: #fffdf1;
  padding: 20px;
}
</style>