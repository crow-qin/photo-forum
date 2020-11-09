<template>
  <div class=" h-min-all">
    <Bar />
    <!-- <div class="f-16 color-3 t-center" v-if="List.length==0">
      找不到
    </div> -->
    <!-- <div v-else> -->
    <!-- <div class=""> -->
      <div class="slide-nav w-all f-aj-c bg-f" :class="{navBarWrap: isTop}" ref="slide_box">
         <!-- :class="{navBarWrap: isTop}" -->
        <div
          class="slide-nav-item f-14 f1 t-center"
          :class="{ 'color-blue': slideIndex == i }"
          v-for="(v, i) in slideArr"
          :key="i"
          @click="selectedIndex(i)"
        >
          {{ v }}
        </div>
        <div class="slide-nav-active" :style="slideSty"></div>
      </div>

      <div class="slide-box pos-rel w-all" style="height: calc(100% - 40px)">
        <!-- <div class="slide-box w-all pos-rel" :style="{height: height+'px'}"> -->
          <div class="f-a-c pos-abs slide-box-content"
           style="height: calc(100% - 40px)"
           :style="{left: left}">
            
            <div
              class="f1"
              v-for = "(v,i) in slideArr"
              :key="i"
               style="height: calc(100% - 40px); overflow-y:auto;"
            >
              <div :class="'bg-' + i"
                :style="{height: $data['list'+i]*80+'px'}">
              {{ i +  $data['list'+i]}}
              </div>
            </div>
          </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Bar from "@/components/Bar.vue";

@Component({
  components: {
    Bar
  }
})
export default class SearchDetail extends Vue {
  private kw: string = "";
  private List: any[] = [];
  private slideArr: string[] = ["最热", "最新", "作者", "图片"];
  private slideIndex: number = 0;
  private slideTop: number = 0
  private isTop: boolean = false
  private height: number = 0
  private list0: number = 28
  private list1: number = 19
  private list2: number = 13
  private list3: number = 24
  private left: number | string = 0
  private scrollList: number[] = [0, 0, 0, 0]

  get slideSty(): any {
    return {width: `calc(100% / ${this.slideArr.length})`,transform: `translateX(${100 * this.slideIndex}%)`};
  }

  @Watch('slideIndex', {immediate: true})
  watchSlideIndex(now: number): void {
    this.height = this.$data['list' + now] * 80
    this.left = -now*100 + '%'
    console.log(this.left)
  }

  mounted(): void {
    let { kw } = this.$route.query;
    this.kw = kw as string;
    console.log(kw);
    let {slide_box} = this.$refs
    this.slideTop = (slide_box as any).offsetTop
    window.addEventListener('scroll',this.watchScroll)
  }

  // 请求相关数据
  getDetail() {}

  selectedIndex(i: number) {
    this.slideIndex = i;
  }

  watchScroll() {
    let curScroll:number = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll)
    this.isTop = curScroll > this.slideTop 
    
  }
}
</script>

<style lang="scss">

.slide {
  &-container {
    height: calc(100% + 44px);
  }
  &-nav {
  height: 40px;
  position: relative;

  &-item {
    line-height: 40px;
  }
  &-active {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: #0084ff;
    
    transition: transform 0.6s;
  }
}
  &-box {
    overflow-x: hidden;
    // overflow-y: auto;
    &-content {
      width: 400%;
      transition: left .3s;
    }
  }
}
.bg {
  &-0 {
    background: #f8dddd22;
  }
  &-1 {
    background: #fdf58d22;
  }
  &-2 {
    background: #8ddfdd22;
  }
}

.navBarWrap {
  position:fixed;
  top:0;
  z-index:999;
}
</style>