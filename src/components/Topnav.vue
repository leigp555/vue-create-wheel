<template>
  <div class="top-nav">
    <button class="toggleAside" @click="toggleMenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-list"></use>
      </svg>
    </button>

    <router-link to="/">
      <div class="logo">LOGO</div>
    </router-link>

    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx")
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
$color: #007974;
.top-nav {
  background-color: pink;
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 500px) {
    justify-content: center;
  }

  > .logo {
    max-width: 6em;
    margin: 0 auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    background-color: inherit;
    border: none;
    position: absolute;
    top: 25px;
    transform: translateY(-50%);
    left: 20px;

    > .icon {
      width: 20px;
      height: 20px;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}

</style>