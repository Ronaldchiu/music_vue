<template>
<!-- back不添加.stop会触发冒泡事件 -->
<div class="header" @click="changeTheme">
  <div class="left" @click.stop="back"></div>
  <div class="container">{{title}}</div>
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
  props: {
    title: {
      type: String,
      default: '',
      requried: true
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    },
    back () {
      window.history.back()
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
    @include bg_img('../assets/images/back');
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
    font-weight: bold;
    color: #ffffff;
    @include no-wrap();
  }
}
</style>
