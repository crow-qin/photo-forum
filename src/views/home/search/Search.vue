<template>
  <div class="box-all bg-f8">
    <Bar></Bar>
    <div class="f-a-c p-8">
      <input type="text" v-model="text" class="f1 ipt-box f-14" />
      <div class="f-16 ipt-text t-center" @click="openPage('')">搜索</div>
    </div>
    <div class=" f-14 color-3 f-j-sb f-a-c f-wrap p-16" v-show="historyRecord.length>0">
      <div class="m-b-8">最近搜索</div>
      <div @click="showDia('all')">清除全部</div>
      <div class="w-all">
        <div class="s-history-box-item f-16 h-42" v-for="v in historyRecord" :key="v.date" @touchstart="onStart(v)" @touchmove="onMove(v)" @touchend="onEnd(v)">
          {{v.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Bar from "@/components/Bar.vue";
 
interface HrItem {
  text: string,
  date: string
}

@Component({  
  components: {
    Bar
  },
})
export default class Search extends Vue {
  private text: string = ''
  private historyRecord: Array<HrItem> = []
  private timer: any = null

  private isMove: boolean = false

  private openPage(flag: string = ''): void {
    console.log(flag);
    
    if(flag == '' && this.text.length > 0) {
      flag = this.text
    }
    
    this.addHR(flag) 
    
    this.$router.push({name: 'search-detail',query: {kw: flag}})
  }
  addHR(text: string): void {
    if(text.trim() == '') return 
    let date:string = new Date().getTime().toString()
    let item: HrItem = {
      text: text,
      date
    }
    this.historyRecord = this.historyRecord.filter(v=>{
      return v.text !== text
    })
    this.historyRecord.unshift(item)
    this.text = ''
  }
  delHR(flag: string | HrItem): void {
    if(flag == 'all') {
      this.historyRecord = []
    } else {
      this.historyRecord = this.historyRecord.filter(v=>{
        return v.date !== (flag as HrItem).date
      })
    }
  }
  private showDia(flag: string | HrItem):void {
    let text: string = flag=='all' ? '是否删除所有历史记录' : '是否删除该条历史记录' 
    console.log(text);
    this.$createDialog({
      type: 'confirm',
      content: text,
       confirmBtn: {
          text: '确定',
          active: true,
        },
        cancelBtn: {
          text: '取消',
          active: false,
        },
        onConfirm: () => {
          this.delHR(flag)
        }
        
      },
      // (createElement: any)=>{
      //   return  createElement('p',{
      //       'class': {
      //         'p-t-16': true
      //       },
      //       slot: 'title'
      //     }, text)
      // }
    ).show()
  }
  // 删除历史记录
  onStart(obj: HrItem): void {

    this.timer = setTimeout(()=>{
      this.showDia(obj)
      clearTimeout(this.timer)
      this.timer = null
    },500)

  }
  onMove(obj: HrItem): void {
    console.log('move')

    if(this.timer) {
      clearTimeout(this.timer)
      this.timer = null
      this.isMove = true
    }
  }
  onEnd(obj:HrItem): void {
    if(this.timer) {
      clearTimeout(this.timer)
      this.timer = null
      console.log('点击');

      this.openPage(obj.text)

      return
    }
    if(this.isMove) {
      this.isMove = false
    }
  }
}
</script>

<style lang="scss" scoped>
.ipt {
  &-box {
    line-height: 40px;
    padding: 0 8px;
  }
  &-text {
    width: 60px;
    line-break: 44px;
    cursor: pointer;
  }
}
.s-history {

  &-box-item {
    padding: 0 16px;
    // border-radius: 16px;
    // margin: 0 16px 16px 0;
    // background: rgba($color: #0084ff, $alpha: .1);
  }
}
</style>