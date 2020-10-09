<template>
<div class="w-all f-a-c color-3 p-16" :class="[bg,{'clickable': clickable&&clicked}]" :style="itemStyle" @click="onTap">
  
  <img class :src="icon" v-if="icon" alt />
  
  <p class="f-16-b f1 item-text">{{text}}</p>
  
  <p class="f-16 color-6" v-if="value">{{value}}</p>
  
  <slot></slot>
  
  <i class="iconfont"></i>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Emit,
  Watch
} from 'vue-property-decorator'

@Component
export default class FormItem extends Vue {
  @Prop({
    default: '',
  })
  icon!: string
  
  @Prop({
    default: '',
  })
  text!: string
  
  @Prop({
    default: '',
  })
  value!: string
  
  @Prop({
    // default: 44,
  })
  height!: number
  
  @Prop({
    default: false
  })
  hasLine!: boolean
  
  @Prop({
    default: 'bg-f'
  })
  bg!: string

  @Prop({
    default: true
  })
  clickable!: boolean

  // data
  private clicked: boolean = false
  private timer: any = null

  get itemStyle(): string {
    let h_text:string = this.height ? `height: ${this.height}px;` : ''
    let line_text:string = this.hasLine ? 'border-bottom: 1px solid #eee;': ''
    return h_text + line_text
  }

  @Watch('clicked')
  onClicked(now:boolean):void {
    if(now) {
      this.clearTimer()
      console.log('true')
      this.timer = setTimeout(()=>{
        this.clearTimer()
        console.log('结束')
      },500)
    }
  }

  mounted() {
  }

  @Emit('onClick')
  onTap() {
    if(this.clickable&&!this.clicked) {
      this.clearTimer()
      this.clicked =true
      console.log('点击')
    }
  }

  clearTimer(): void {
    if(this.timer != null) {
      clearTimeout(this.timer)
      this.timer = null
      this.clicked = false
      console.log(this.timer,this.clicked)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  &-text  {
    white-space: nowrap;
  }
}
</style>
