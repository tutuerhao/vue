<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import initFontSize from './base/initUtil'

  export default {
    name: 'app',
    data: function () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeCreate: function () {

    },
    created: function () {
      document.body.style = 'margin: 0px;padding: 0px;width: 100%;height: 100%;'
      initFontSize(16)
      this.$router.push("/login")
    },
    beforeRouteUpdate(to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>

<style lang="scss">

  * {
    margin: 0px;
    padding: 0px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .child-view {
    position: absolute;
    transition: all .1s cubic-bezier(0, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

</style>
