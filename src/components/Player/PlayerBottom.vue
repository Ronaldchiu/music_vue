<template>
    <div class="player-bottom">
      <!-- 进度条 -->
      <div class="bottom-progress">
        <!-- 开始 -->
        <span ref="eleCurrentTime">00:00</span>
        <!-- 进度条： progressLine初始宽度为0-->
        <div class="progress-bar" @click="progressClick" ref="progressBar">
          <div class="progress-line" ref="progressLine">
            <div class="progress-dot"></div>
          </div>
        </div>
        <!-- 结束 -->
        <span ref="eleTotalTime">00:00</span>
      </div>
      <div class="bottom-controll">
        <div class="mode loop" ref="mode"></div>
        <div class="prev"></div>
        <div class="play" ref="play"></div>
        <div class="next" ></div>
        <div class="favorite"></div>
      </div>
    </div>
</template>

<script>
import { formartTime } from '../../tools/tools'
export default {
  name: 'PlayerBottom',
  // props: {
  //   totalTime: {
  //     type: Number,
  //     default: 0,
  //     required: true
  //   },
  //   currentTime: {
  //     type: Number,
  //     default: 0,
  //     required: true
  //   }
  // },
  watch: {
    totalTime (newValue, oldValue) {
      const time = formartTime(newValue)
      this.$refs.eleTotalTime.innerHTML = time.minute + ':' + time.second
    },
    currentTime (newValue, oldValue) {
      // 1.格式化当前播放的时间
      const time = formartTime(newValue)
      this.$refs.eleCurrentTime.innerHTML = time.minute + ':' + time.second
      // 2.根据当前播放的时间计算比例
      const value = newValue / this.totalTime * 100
      this.$refs.progressLine.style.width = value + '%'
    }
  },
  methods: {
    progressClick (e) {
      // 1. 计算进度条的位置
      const normalLeft = this.$refs.progressBar.offsetLeft // 进度条的总长
      const eventLeft = e.pageX // 点击位置的横轴值
      const clickLeft = eventLeft - normalLeft
      console.log(eventLeft)
      const progressWidth = this.$refs.progressBar.offsetWidth
      const value = clickLeft / progressWidth
      this.$refs.progressLine.style.width = value * 100 + '%'

      // 2.计算当前应该从什么地方开始播放
      const currentTime = this.totalTime * value
      console.log(currentTime)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.player-bottom{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .bottom-progress{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      @include font_size($font_small);
      @include font_color();
    }
    .progress-bar{
      width: 100%;
      margin: 0 10px;
      height: 10px;
      background: #fff;
      .progress-line{
        width: 0%;
        height: 100%;
        background: #ccc;
        position: relative;
        .progress-dot{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .bottom-controll{
    width: 80%;
    margin: 0 auto;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width: 84px;
      height: 84px;
    }
    .mode{
      &.loop{
        @include bg_img('../../assets/images/loop');
      }
      &.one{
        @include bg_img('../../assets/images/one');
      }
      &.random{
        @include bg_img('../../assets/images/shuffle');
      }
    }
    .prev{
      @include bg_img('../../assets/images/prev')
    }
    .play{
      @include bg_img('../../assets/images/play');
      &.active{
        @include bg_img('../../assets/images/pause');
      }
    }
    .next{
      @include bg_img('../../assets/images/next');
    }
    .favorite{
      @include bg_img('../../assets/images/un_favorite');
      &.active{
        @include bg_img('../../assets/images/favorite');
      }
    }
  }
}
</style>
