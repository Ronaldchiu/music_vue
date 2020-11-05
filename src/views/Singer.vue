<template>
    <div class="singer">
        歌手
    </div>
</template>

<script>
export default {
  name: 'Singer'
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
.singer {
  @include font_size($font_medium);
}
</style>
