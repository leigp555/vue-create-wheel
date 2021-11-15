<template>
  <div class="intro">常规用法</div>
  <div>
    <FirstExample>button</FirstExample>
    <FirstExample theme="link">link</FirstExample>
    <FirstExample theme="text">text</FirstExample>
  </div>
  <div class="intro">大小可调节</div>
  <div>
    <div class="example">
      <FirstExample size="big">button</FirstExample>
      <FirstExample size="normal">button</FirstExample>
      <FirstExample size="small">button</FirstExample>
    </div>
    <div class="example">
      <FirstExample size="big" theme="link">link</FirstExample>
      <FirstExample size="normal" theme="link">link</FirstExample>
      <FirstExample size="small" theme="link">link</FirstExample>
    </div>
    <div class="example">
      <FirstExample size="big" theme="text">text</FirstExample>
      <FirstExample size="normal" theme="text">text</FirstExample>
      <FirstExample size="small" theme="text">text</FirstExample>
    </div>
    <div class="intro">不同等级</div>
    <div class="example">
      <FirstExample level="main">主要按钮</FirstExample>
      <FirstExample>普通按钮</FirstExample>
      <FirstExample level="danger">危险按钮</FirstExample>
    </div>
    <div class="example">
      <FirstExample level="main" theme="link">主要按钮</FirstExample>
      <FirstExample theme="link">普通按钮</FirstExample>
      <FirstExample level="danger" theme="link">危险按钮</FirstExample>
    </div>
    <div class="example">
      <FirstExample level="main" theme="text">主要按钮</FirstExample>
      <FirstExample theme="text">普通按钮</FirstExample>
      <FirstExample level="danger" theme="text">危险按钮</FirstExample>
    </div>
    <div class="intro">支持禁用</div>
    <div>
      <FirstExample :disabled="true">禁用按钮</FirstExample>
      <FirstExample theme="link" :disabled="true">禁用链接按钮</FirstExample>
      <FirstExample theme="text" :disabled="true">禁用文本按钮</FirstExample>
    </div>
    <div class="intro">支持加载中</div>
    <div>
      <FirstExample loading>加载中</FirstExample>
      <FirstExample theme="link" loading>加载中</FirstExample>
      <FirstExample theme="text" loading>加载中</FirstExample>
    </div>
  </div>
</template>
<script lang="ts">
import FirstExample from '../lib/button.vue'

export default {
  components: {FirstExample},
}
</script>
<style lang="scss" scoped>
.intro {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
}

.example {
  margin-bottom: 10px
}
</style>