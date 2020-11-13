<template>
  <div class="w-all h-min-all f-column f-14 color-3">
    <Bar title="我的喜欢" />
    <div class=" f-column f1 p-16">
      <div class="w-all">10篇</div>
      <div class="">
        <div class="w-all m-t-8" v-for="(v,i) in reList" :key="i">
          <div class="f-a-c f-j-sb">
            <p>{{v.time}}</p>
            <p>{{v.len}}篇</p>
          </div>
          <div class="img-content w-all f-wrap">
            <div class="bg-f8 img-item" v-for="v1 in v.subList" :key="v1.id"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, State } from "vuex-class";
import Bar from "@/components/Bar.vue";

@Component({
  components: {
    Bar,
  },
})
export default class MyFavorite extends Vue {
  // data
  private list: any[] = [
    {
      lid: 1,
      time: '2020-11-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 1,
      time: '2020-11-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 1,
      time: '2020-11-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 1,
      time: '2020-10-12 08:04:04',
      smallImg: '',
      pid: 1
    },
    {
      lid: 1,
      time: '2020-10-12 08:04:04',
      smallImg: '',
      pid: 1
    },
  ]
  private page: number = 1
  private pageSize: number = 30
  private reList: any[] = []

 
  // @State currentUser:any
  @Getter currentUserList:any

  mounted() {
    let clientWidth:number = document.documentElement.clientWidth
    console.log(clientWidth)
    this.formatList(this.list)
  }

  formatList(list:any[]) {
    let arr: any[] = []

    if(this.page > 1) {
      arr = this.reList
    }
    let index = -1

    list.forEach((v,i)=>{
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
</style>