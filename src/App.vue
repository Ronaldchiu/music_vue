<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player></Player>
  </div>

</template>
<script>
import MainHeader from './components/MainHeader'
import Tabbar from './components/Tabbar'
import Player from './views/Player'
export default {
  name: 'App',
  components: {
    MainHeader,
    Tabbar,
    Player
  }
}
/***
 主界面分为：
 1. Header头部
 2. Tabbar栏目
 3. 与tab栏对应的内容
 4. 播放器：
    a.播放界面
    b.列表播放器
    3.小型播放器
 ***/
</script>

<style scoped lang="scss">
</style>
