<template>
  <div class="player">
    <NormalPlayer></NormalPlayer>
    <MiniPlayer @showList="showList"></MiniPlayer>
    <ListPlayer ref="listPlayer"></ListPlayer>
  </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer'
import MiniPlayer from '../components/Player/MiniPlayer'
import ListPlayer from '../components/Player/ListPlayer'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  methods: {
    showList () {
      this.$refs.listPlayer.show()
    }
  }
}
</script>

<style lang="scss" scoped>
// .player {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgb(172, 62, 80);
// }
</style>