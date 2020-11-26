<template>
  <div class="box-all f-a-c f-column">
    <Bar />

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

      <div class="slide-box pos-rel w-all f1">
        <!-- <div class="slide-box w-all pos-rel" :style="{height: height+'px'}"> -->
          <div class="f-a-c pos-abs slide-box-content h-all"
           :style="{left: left}">
            
            <div
              class="f1 h-all"
              v-for = "(v,i) in slideArr"
              :key="i"
               style="overflow-y:auto;"
            >
              <div :class="'bg-' + i">
                <p class=" h-42" v-for="(v1, i1) in $data['list'+i]" :key="i1">
                  {{v1}}
                </p>
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
:root {
  --bg: #00ff84;
}
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
  &-3 {
    background: var(--bg);
  }
}

.navBarWrap {
  position:fixed;
  top:0;
  z-index:999;
}
</style>