<template>
  <div class="gulu-homePage">
    <nav class="gulu-homeNav">
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </div>
      <ol class="doc">
        <li><a href="mailto:907090585@qq.com">联系我</a></li>
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ol>
    </nav>
    <main class="gulu-homeContent">
      <h1>Qmdv</h1>
      <h4>基于vue和TS开发的一套组件</h4>
      <div class="link">
        <a href="https://github.com/leigp555/wheel-UI.git">
          <button>GitHub</button>
        </a>
        <router-link to="/doc">
          <button>开始使用</button>
        </router-link>
      </div>
    </main>
    <footer class="gulu-homeFeature">
      <div class="content">
        <div>
          <svg class="icon-feature" >
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <p>基于Vue3开发</p>
        </div>
        <div>
          <svg class="icon-feature" >
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <p>采用Typescript书写</p>
        </div>
        <div >
          <svg class="icon-feature" >
            <use xlink:href="#icon-easy"></use>
          </svg>
          <p>代码简单易懂</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
$color: #ffe3b7;
.gulu-homePage {
  > nav {
    background-color: $color;
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

      > li {
        font-size: 20px;
        > a {
          text-decoration: none;

          &:hover {
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
    padding-top: 8vh;
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
    }
    >h4{font-size: 18px;}
    > .link {
      display: flex;
      gap: 25px;
      margin-top: 20px;
      margin-bottom: 100px;
      @media (max-width: 400px) {
        margin-bottom: 80px;
      }

      > a {
        text-decoration: none;

        > button {
          color: #fafafa;
          font-size: 1.1em;
          background-color: #111111;
          white-space: nowrap;
          padding: 10px;
          width: 100px;
          height: 48px;
          border-radius: 1em;
          border: none;
          @media (max-width: 500px) {
            width:80px;
            height: 40px;
            padding: 10px;
            font-size: 14px;
            border-radius: 12px;
          }
        }
      }
    }
  }

  > footer {
    > .content {
      margin-top: 30px;
      display: flex;
      gap: 5vw;
      justify-content: center;
      flex-wrap: wrap;
      @media(max-width: 750px){
        margin-top: 20px;
      }
      > div {
        background-color: $color;
        border-radius: 20px;
        padding: 10px 30px;
        width: 250px;
        height: 180px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        @media(max-width: 1100px){
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 150px;
        }
        @media(max-width:750px){
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 150px;
          height: 120px;
        }
        @media (max-width: 500px) {
          flex-direction: row;
          justify-content: start;
          align-items: center;
          height: 50px;
          width: 250px;
        }

        > p {
          font-size: 20px;
          white-space: nowrap;
          font-family: "Microsoft Yahei UI", sans-serif;
          @media (max-width: 1100px) {
            font-size: 2vw;
          }
          @media (max-width: 500px) {
            font-size: 18px;
          }
        }
      }
    }
  }

  .icon{
    width: 34px;
    height:34px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .icon-feature {
    width: 80px;
    height: 80px;
    @media(max-width: 750px) {
      width: 60px;
      height:60px;
    }
    @media(max-width: 600px) {
        width: 40px;
        height: 34px;
    }
  }
}
</style>