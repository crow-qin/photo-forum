<template>
  <div class="w-all h-all f-column f-14 color-3">
    <Bar :title="type==1?'我的喜欢':'我的收藏'" />
    <div class="f-column f1 p-16 clear-fix">
      <cube-scroll 
        ref="contentScroll"
        :data="reList"
        :options="options"
        @pulling-down="onPullDown"
        @pulling-up="getData" >
      <div class="w-all">{{totalCount}}篇</div>
      <div class="f1 slide-y" v-if="!loading">
          <div class="w-all m-t-8" v-for="(v,i) in reList" :key="i">
            <div class="f-a-c f-j-sb">
              <p>{{v.time}}</p>
              <p>{{v.len}}篇</p>
            </div>
            <div class="img-content w-all f-wrap">
              <div class="bg-f8 img-item" v-for="v1 in v.subList" :key="v1.id"></div>
            </div>
          </div>
          <template v-if="customPullDown" slot="pulldown" slot-scope="props">
              <div
                  v-if="props.pullDownRefresh"
                  class="cube-pulldown-wrapper"
                  :style="props.pullDownStyle">
                <div
                    v-show="props.beforePullDown"
                    class="before-trigger"
                    :style="{paddingTop: props.bubbleY + 'px'}">
                  <span :class="{rotate: props.bubbleY > pullDownRefreshThreshold - 40}">↓</span>
                </div>
                <div class="after-trigger" v-show="!props.beforePullDown">
                  <div v-show="props.isPullingDown" class="loading">
                    <cube-loading></cube-loading>
                  </div>
                  <div v-show="!props.isPullingDown" class="text"><span class="refresh-text">Refresh success</span></div>
                </div>
              </div>
            </template>
      </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import { Getter, State } from "vuex-class";
import Bar from "@/components/Bar.vue";

type Page = 0 | 1
const list = [
    {
      lid: 1,
      time: '2020-11-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 2,
      time: '2020-11-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 3,
      time: '2020-11-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 4,
      time: '2020-10-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 5,
      time: '2020-08-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 5,
      time: '2020-09-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 5,
      time: '2020-07-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 5,
      time: '2020-06-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 5,
      time: '2020-10-12 08:04:04',
      smallImg: '',
      pid: 1
    },
  ]

@Component({
  components: {
    Bar
  }
})
export default class MyFavorite extends Vue {
  // data
  private list: any[] = list
  
  private page: number = 1
  private pageSize: number = 30
  private reList: any[] = []
  private type: string | number = 0
  private totalCount: number = 10
  private options: any = {
    pullDownRefresh: {
      threshold: 60,
      // stop: 44,
      stopTime: 1000,
      txt: '刷新成功'
    },
    pullUpLoad: true
  }
      // navTxts: txts,
  private secondStop: number = 26
  private loading: boolean = false

 
  // @State currentUser:any
  // @Getter currentUserList: any

  mounted() {
    // let clientWidth: number = document.documentElement.clientWidth
    // console.log(clientWidth)
 
    this.type = (this.$route.query.type as string);
    this.formatList(this.list)
  }
  getData(flag: string = '') {
    if(flag == 'reset') {
      this.page = 1
      this.loading = true
      // this.reList = []
    }
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        let scroll:any = this.$refs.contentScroll
        this.formatList(list)
        flag=='reset'? this.loading = false : ''
        this.page += 1
        resolve({code: 0})
      },3000)
    })
    
  }
  formatList(list: any[]) {
    let arr: any[] = []

    if(this.page > 1) {
      arr = this.reList
    }
    let index = -1

    list.forEach((v,i)=> {
      console.log(v.time.substr(0, 7));
      
      let isExist = arr.some((v1,j) => {
        if(v1.time == v.time.substr(0, 7)) {
          index = j
          return true
        }
        return false
      })
      if(isExist) {
        arr[index].subList.push(v)
        arr[index].len += 1
      }else {
        let o = {
          len: 1,
          subList: [v],
          time: v.time.substr(0, 7)
        }
        arr.push(o)
      }
    })
    this.reList = [...arr]
    console.log(this.reList);
  }

  async onPullDown() {
    console.log('下拉');
    
    // (this.$refs.contentScroll as any).beforePulldown = false;
    // (this.$refs.contentScroll as any).isPullingDown = true
    let scroll:any = this.$refs.contentScroll
    console.log('开始请求', scroll.beforePulldown, scroll.isPullingDown)
    await this.getData('reset');
    // (this.$refs.contentScroll as any).isPullingDown = false;
    // (this.$refs.contentScroll as any).beforePulldown = true;

    (this.$refs.contentScroll as any).forceUpdate()
    // (this.$refs.contentScroll as any).scrollTo(0, this.secondStop, 300)
    
    // this.dataLoad()
    
  }
  dataLoad() {
    const contentScroll: any = this.$refs.contentScroll
    contentScroll.scroll.beforePullDown && contentScroll.refresh()
  }
}
</script>

<style lang="scss" scoped>

.img {
  &-content {
    justify-content: space-between;
    &::after {
      content: '';
      width: 100px;
      height: 0px;
    }
  }

  &-item {
    width: 100px;
    height: 120px;
    margin-top: 16px;
    
  }
}
.cube-pulldown-wrapper {
    text-align: center;
    .before-trigger {
      height: auto;
      font-size: 30px;
      align-self: flex-end;
      span {
        display: inline-block;
        line-height: 1;
        transition: all 0.3s;
        color: #666;
        padding: 15px 0;
        &.rotate {
          transform: rotate(180deg);
        }
      }
    }
    .after-trigger {
      flex: 1;
      margin: 0;
      .text-wrapper {
        margin: 0 auto;
        margin-top: 14px;
        padding: 5px 0;
        color: #498ec2;
        background-color: #d6eaf8;
      .cube-loading-spinners {
        margin: auto;
      }
    }
  }
}
</style>