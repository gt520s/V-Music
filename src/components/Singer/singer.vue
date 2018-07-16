<template>
<div class="singer"></div>
</template>

<script type="text/ecmascript-6">
import {singerList} from 'api/singer'
import {ERR_OK} from 'api/config'

window.getUCGI5252209301812893 = function (res) {
  console.log(res)
}
export default {
  name: 'singer',
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      singerList().then(res => {
        if (res.code === ERR_OK) {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position:fixed;
    top:88px
    bottom:0
    width:100%
</style>
