
<template>
    <div class="recommend">
      <div class="recommend-warpper">
        <ScrollView>
          <!-- 在Recommend与Scrollview这对父子组件中，以下是父组件插槽内容，即Scrollview组件里的内容 -->
          <div>
            <Banner :banners="banners"></Banner>
            <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" :type="'personalized'"></Personalized>
            <Personalized :personalized="albums" :title="'最新专辑'" @select="fatherSelectItem" :type="'album'"></Personalized>
            <NewSongs :songs="songs"></NewSongs>
          </div>
        </ScrollView>
      </div>
      <transition>
        <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNewSong } from '../api/index'
import Banner from '../components/Recommend/Banner'
import Personalized from '../components/Recommend/Personalized'
import NewSongs from '../components/Recommend/NewSongs'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized,
    ScrollView,
    NewSongs
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    }
  },
  created () {
    getBanner().then((data) => {
      this.banners = data.banners
    })
      .catch(function (err) {
        console.log(err)
      })
    getPersonalized()
      .then((data) => {
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
    getNewAlbum()
      .then((data) => {
        this.albums = data.albums.splice(0, 6)
      })
      .catch(function (err) {
        console.log(err)
      })
    getNewSong()
      .then((data) => {
        const list = []
        data.result.forEach((value) => {
          const obj = {}
          obj.id = value.id
          obj.name = value.name
          obj.picUrl = value.song.album.picUrl
          let singer = ''
          for (let i = 0; i < value.song.artists.length; i++) {
            if (i === 0) {
              singer = value.song.artists[i].name
            } else {
              singer += '-' + value.song.artists[i].name
            }
          }
          obj.singer = singer
          list.push(obj)
        })
        this.songs = list
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    fatherSelectItem (id, type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
      })
    }
  }
}
/***
 歌单推荐板块分为：
 1.Banner组件：使用swiper完成轮播效果
 2.Personalized组件的复用：
    1) 推荐歌单
    2) 最新专辑
  @select="fatherSelectItem"，其中Recommend父组件通过select将fatherSelectItem函数与子组件关联
  而Personalized子组件将函数selectItem通过select发到父组件，子组件中的点击事件传入id以及带入this.type(type由父组件通过v-bind传入)
 3.NewSongs组件
 ***/
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
.recommend{
  @include font_size($font_medium);
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .recommend-warpper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.v-enter{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0%);
}
.v-enter-active{
  transition: transform 1s;
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-to{
  transform: translateX(100%);
}
.v-leave-active{
  transition: transform 1s;
}
</style>
