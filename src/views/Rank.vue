<template>
    <div class="rank">
        排行
    </div>
</template>

<script>
export default {
  name: 'Rank'
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
.rank {
  @include font_size($font_medium);
}
</style>
