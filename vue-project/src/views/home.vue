<template>
  <div class="gulu-homePag">
    <TopNav/>
    <div class="gulu-content">
      <div class="gulu-banner">
        <h1>Open source</h1>
        <h1>Useful vue components</h1>
        <div class="actions">
          <a href="https://github.com">
            <Button>GitHub</Button>
          </a>
          <router-link to="/doc">
            <Button>start now</Button>
          </router-link>
        </div>
      </div>
      <div class="gulu-feature">
        <div class="gulu-vue">vue</div>
        <div class="gulu-ts">ts</div>
        <div class="gulu-route">router</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/topNav-home.vue"
import Button from "../lib/button.vue"

export default {
  components: {TopNav, Button}
}
</script>

<style lang="scss" scoped>
body {
  background-color: red;
}

.gulu-homePag {
  width: 100%;
  height: 100%;
  padding: 3vh;

  > .gulu-content {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .gulu-banner {
      border: 5px solid #ffffff;
      width: 80%;
      margin-bottom: 40px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      @media(max-width: 400px) {
        width: 90%;
      }

      > :first-child {
        margin-top: 40px;

        > span {
          color: #ffffff;
        }
      }

      > h1 {
        text-align: center;
        color: #1d1415;
        font-size: 5vw;
      }

      > .actions{
        display: inline;
        text-align: center;
        color: #201718;
        margin-top: 40px;
        margin-bottom: 25px;
        > a {
          margin: 0 2vw;
        }
      }
    }

    > .gulu-feature {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      gap: 40px;

      > div {
        width: 300px;
        height: 120px;
        border-radius: 15px;
        padding: 20px;
        @media (min-width: 500px) {
          width: 24vw;
          height: 15vw;
        }
      }

      > .gulu-vue {
        background-color: #f3e1f1;
      }

      > .gulu-ts {
        background-color: #fff0b9;
      }

      > .gulu-route {
        background-color: #fff7f5;
      }
    }
  }
}

</style>