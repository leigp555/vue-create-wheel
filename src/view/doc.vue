<template>
  <div class="gulu-doc" ref="container">
    <nav class="gulu-doc-nav">
      <div class="select" @click="toggle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-list"></use>
        </svg>
      </div>
      <div class="logo">
        <router-link to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-logo"></use>
          </svg>
        </router-link>
      </div>
      <div class="gitHub">
        <a href="https://github.com">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github-fill"></use>
          </svg>
        </a></div>
    </nav>
    <hr>
    <div class="container">
      <aside class="gulu-doc-aside" :class="{listVisible:visible}" @click="onClick">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/popup">Popup组件</router-link>
          </li>
        </ol>
      </aside>
      <main class="gulu-doc-main">
        <div class="left"></div>
        <div class="content">
          <div class="main-content">
            <router-view/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'

export default {
  setup() {
    const visible = ref<Boolean>(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    let onClick = (e) => {
      const t = e.target
      if (t.tagName.toLowerCase() === 'a') {        //事件委托
        toggle()
      }
    }
    return {visible, toggle, onClick}
  }
}
</script>
<style lang="scss" scoped>
.gulu-doc {
  position: relative;

  > nav {
    background-color: #fffdf1;
    padding: 14px 20px;
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    border-bottom: 1px solid #ffe3b7;
    box-shadow: 0 5px 5px #ffe3b7;
    justify-content: space-between;

    > .gitHub > a > svg {
      height: 24px;
      width: 30px;
    }

    .select {
      display: none;
      @media(max-width: 900px) {
        display: inline;
      }
    }
  }

  > .container {
    position: relative;
    margin-top: 60px;

    > .gulu-doc-aside {
      position: fixed;
      top: 62px;
      left: 0;
      z-index: 10;
      height: 100%;
      padding: 20px;
      border-right: 2px solid #ffe3b7;
      width: 200px;
      background-color: #fffdf1;
      @media(max-width: 900px) {
        display: none;
        animation: action 110ms;
      }

      &.listVisible {
        display: block;

      }
      > ol > li {
        height: 1.9em;

        & :focus {
          color: #42b983;
        }

        > a:hover {
          text-decoration: underline #42b983;
          color: #42b983;
        }
      }
    }

    > main {
      display: flex;

      > .left {
        flex-shrink: 0;
        width: 200px;
        @media(max-width: 900px) {
          display: none;
        }
      }

      > .content {
        width: 100%;
        @media (max-width: 900px) {
          padding: 20px;
        }

        > .main-content {
          max-width: 870px;
          margin-top: 50px;
          margin-left: 10vw;
          margin-right: 10vw;
          @media (max-width: 500px) {
            margin: 0;
          }
        }
      }
    }
  }

  .icon {
    width: 30px;
    height: 24px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
@keyframes action {
  0%{transform:translateX(-150px)}
  50%{transform:translateX(-75px)}
  0%{transform:translateX(150)}
}
</style>
