<template>
<div class="header" @click="changeTheme">
  <div class="left" @click.stop="hiddenNormalPlayer"></div>
  <div class="container">
    <h3>演员</h3>
    <p>薛之谦</p>
  </div>
  <div class="right"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    hiddenNormalPlayer () {
      this.setFullScreen(false)
      this.setMiniPlayer(true)
    },
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  @include bg_color();
  .left {
    width: 84px;
    height: 84px;
    margin-top: 8px;
    @include bg_img('../../assets/images/down');
  }
  .right{
    width: 84px;
    height: 84px;
    // @include bg_img('../../assets/images/account');
    margin-top: 8px;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @include font_size($font_medium);
    text-align: center;
    color: #ffffff;
    @include no-wrap();
  }
}
</style>
