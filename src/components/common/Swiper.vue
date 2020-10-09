<template>
  <div class="swiper-content w-all pos-rel clear-fix" @touchstart="onStart" @touchmove="onMove" @touchend="onEnd">
    <div class="swiper-count pos-abs f-14 color-f" v-if="imgCount>1&&showCount">
      {{(curVal + 1) + '/' + imgCount}}
    </div>
    <div class="swiper-box f-a-c pos-rel" :class="{'left-ani': needAni}" :style="{left: nowLeft+'px'}">
      <img :src="v" class="auto-img" v-for="(v, i) in imgList" :key="i" @click="onClick">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
const offsetWidth = document.documentElement.offsetWidth

@Component
export default class Swiper extends Vue {

  private nowLeft: number = 0
  private prevLeft: number = 0
  private offsetLeft: number = 0
  private minLeft: number = 0
  private needAni: boolean = false

  @Prop({
    required: true
  }) 
  imgList!: any[]

  @Prop({
    default: 0,
    required: true
  })
  curVal!: number|string

  // 显示数量
  @Prop({
    type: Boolean,
    default: true
  })
  showCount!: boolean

  get imgCount(): number {
    return this.imgList.length
  }
  get maxLeft():number {
    return (this.imgCount-1)*offsetWidth
  }

  @Emit('onClick')
  onClick() { 
  }

  onStart(e:any):void {
    if(this.imgCount == 1) return
    let {clientX} = e.touches[0]
    // console.log(e)
    this.prevLeft = this.nowLeft
    this.offsetLeft = clientX
    this.needAni = false
  }
  onMove(e:any):void {
    if(this.imgCount == 1) return
    let {clientX} = e.touches[0]
    // console.log(e)
    let nowLeft = this.prevLeft + clientX - this.offsetLeft
    // console.log(nowLeft)
    this.nowLeft = nowLeft >= 0 
    ? 0 
    : nowLeft <= -this.maxLeft 
    ? -this.maxLeft 
    : nowLeft
  }
  onEnd(e:any):void {
    if(this.imgCount == 1) return
    this.needAni = true
    let diff = this.prevLeft - this.nowLeft
    if (Math.abs(diff)<offsetWidth*0.3) {
      this.nowLeft = this.prevLeft
      this.prevLeft = 0
      return
    }
    if(diff>0) {
      // 左划
      this.nowLeft = this.prevLeft - offsetWidth
      this.changeValue()
    }else {
      this.nowLeft = this.prevLeft + offsetWidth
      this.changeValue(false)
    }
    this.prevLeft = 0
  }
  
  @Emit('changeValue')
  changeValue(flag: boolean = true): number {
    return flag ? (this.curVal as number) + 1 : (this.curVal as number) - 1
  }

}
</script>

<style lang="scss" scoped>
.swiper {
  &-count {
    right: 12px;
    top: 12px;
    background: rgba($color: #000000, $alpha: .4);
    padding: 0 12px;
    line-height: 20px;
    border-radius: 10px;
    z-index: 4;
  }
  &-box {
    width: 100%;
    top: 50%;
  }
}
.left-ani {
  transition: left .4s ease;
}
</style>