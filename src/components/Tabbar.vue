<template>
    <div class="tabbar">
      <router-link tag="div" class="item" to="/recommend">
        <div>推荐</div>
      </router-link>
      <router-link tag="div" class="item" to="/singer">
        <div>歌手</div>
      </router-link>
      <router-link tag="div" class="item" to="/rank">
        <div>排行</div>
      </router-link>
      <router-link tag="div" class="item" to="/search">
        <div>搜索</div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
.tabbar{
  width: 100%;
  height: 84px;
  @include bg_sub_color();
  display: flex;
  justify-content: space-around;
  .item{
    div{
      line-height: 84px;
      @include font_size($font_medium);
      @include font_color();
    }
    &.router-link-active{
      div{
        @include font_active_color();
      }
      border-bottom: 5px solid #000;
      @include border_color();
    }
  }
}
</style>
