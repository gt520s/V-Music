<template>
<div class="m-header">
  <div class="icon"></div>
  <h1 class="text">Cool Music</h1>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Mheader'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
  .m-header
    position:relative
    height:44px
    text-align:center
    color:$color-theme
    font-size:0
    .text
      font-size:18px
      display:inline-block
      vertical-align:top
      line-height:44px
    .icon
      bg-image('logo')
      display:inline-block
      width:30px
      height:32px
      background-size:30px 32px
      margin-right:5px
      margin-top:6px
      vertical-align:top
</style>
