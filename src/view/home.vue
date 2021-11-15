<template>
  <div class="gulu-homePage">
    <nav class="gulu-homeNav">
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </div>
      <ol class="doc">
        <li><a href="mailto:907090585@qq.com">联系我</a> </li>
        <li><router-link to="/doc">文档</router-link></li>
      </ol>
    </nav>
    <main class="gulu-homeContent">
      <h1>Useful Component</h1>
      <h4>基于vue和TS开发的一套组件</h4>
      <div class="link">
        <a href="https://github.com"><button>gitHub</button> </a>
        <router-link to="/doc"><button>开始使用</button></router-link>
      </div>
    </main>
    <footer class="gulu-homeFeature">
      <div class="content">
        <div class="vue">vue</div>
        <div class="ts">ts</div>
        <div class="into">简介</div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="scss" scoped>
$color: #ffe3b7;
.gulu-homePage {
  > nav {
    background-color:$color;
    padding: 30px 10vw 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 400px) {
      justify-content: center;
    }
    > ol {
      display: flex;
      white-space: nowrap;
      @media(max-width: 400px) {
       display: none;
      }
      >li{
        >a{
          text-decoration: none;
          &:hover{
            padding-top: 10px;
           border-top: 2px solid #fffdf1;
          }
        }
      }
      & :first-child {
        margin-right: 15px;
      }
    }
  }

  > main {
    background-color: $color;
    display: flex;
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    border-bottom-left-radius: 50% 40px;
    border-bottom-right-radius: 50% 40px;
    @media (max-width: 400px) {
      padding-top: 40px;
    }
    > h1 {
      font-size: 48px;
      @media (max-width: 400px) {
        font-size: 2em;
      }
    }

    > .link {
      display: flex;
      gap: 25px;
      margin-top: 20px;
      margin-bottom: 100px;
      @media (max-width: 400px) {
        margin-bottom: 80px;
      }
      >a{
        text-decoration: none;
        > button {
          color: #fafafa;
          background-color: #111111;
          white-space: nowrap;
          height: 2.5em;
          width: 7em;
          border-radius: 1em;
          border: none;
      }
      }
    }
  }

  > footer {
    > .content {
      margin-top: 80px;
      display:flex;
      gap: 5vw;
      justify-content: center;
      flex-wrap: wrap;
      @media (max-width: 400px) {
        margin-top: 60px;
      }
      > div {
        background-color: $color;
        border-radius: 20px;
        padding: 10px;
        width:200px;
        height:200px;
        @media (max-width: 400px) {
          height: 110px;
        }
      }
    }
  }
  .icon {
    width: 30px; height: 24px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>