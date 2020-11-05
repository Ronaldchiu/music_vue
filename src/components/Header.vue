<template>
<div class="header" @click="changeTheme">
  <div class="left"></div>
  <div class="container">网易云音乐</div>
  <div class="right"></div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
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
@import "../assets/css/variable";
@import "../assets/css/mixin";
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
    @include bg_img('../assets/images/logo');
  }
  .right{
    width: 84px;
    height: 84px;
    @include bg_img('../assets/images/account');
    margin-top: 8px;
  }
  .container {
    @include font_size($font_small);
    text-align: center;
    line-height: 100px;
    color: #ffffff;
    font-weight: bold;
  }
}
</style>
