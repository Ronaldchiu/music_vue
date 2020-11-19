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
/***
 Tabbar分为：
 路由重定向/recommend，默认加载Recommend组件
 router-link相当于a链接
 tabbar通过flex横向布局为四部分： 推荐、歌手、排行、搜索
 ***/
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
