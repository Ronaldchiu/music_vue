<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave"
  >
    <div class="mini-player" v-show="isShowMiniPlayer">
      <div class="player-wrapper">
        <div class="player-left" @click.stop="showNormalPlayer">
          <img src="https://p1.music.126.net/DOZHRkXE1sZCM6mWCky5KQ==/109951165188090916.jpg" alt="">
          <div class="player-title">
            <h3>演员</h3>
            <p>薛之谦</p>
          </div>
        </div>
        <div class="player-right">
          <div class="play"></div>
          <div class="list" @click.stop="showList"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'MiniPlayer',
  computed: {
    ...mapGetters([
      'isShowMiniPlayer'
    ])
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    // 当前执行动画元素，回调
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, function () {
        done()
      })
    },
    showList () {
      this.$emit('showList')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .mini-player {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    .player-wrapper {
      width: 100%;
      height: 100%;
      @include bg_color();
      display: flex;
      align-items: center;
      justify-content: space-between;
      .player-left{
        display: flex;
        padding-left: 30px;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 20px;
        }
        .player-title{
          display: flex;
          flex-direction: column;
          justify-content: center;
          @include no-wrap();
          h3{
            @include font_size($font_medium);
            @include font_color();
          }
          p{
            @include font_size($font_medium_s);
            @include font_color();
          }
        }
      }
    }
    .player-right {
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        @include bg_img('../../assets/images/play');
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../assets/images/list')
      }
    }
  }
</style>
