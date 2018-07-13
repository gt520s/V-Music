<template>
<div class="recommend">
  <div class="recommend-content">
    <div v-if="slider.length" class="slider-warpper">
      <Slider>
        <div v-for="item in slider" :key="item.id" >
          <a>
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </Slider>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for="item in songList" :key="item.id" class="item">
          <div class="icon">
            <img width="60" height="60" :src="item.picUrl">
          </div>
          <div class="text">
            <p class="desc">{{item.songListDesc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import {getData} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from 'base/slider/slider'

export default {
  data () {
    return {
      slider: [],
      radioList: [],
      songList: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getData().then(res => {
        if (res.code === ERR_OK) {
          this.slider = res.data.slider
          this.radioList = res.data.radioList
          this.songList = res.data.songList
          console.log(this.songList)
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display:flex
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
