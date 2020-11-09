<template>
  <div class="box-all">
    <Bar />
    <!-- <div class="f-16 color-3 t-center" v-if="List.length==0">
      找不到
    </div> -->
    <!-- <div v-else> -->
    <!-- <div class=""> -->
      <div class="slide-nav w-all f-aj-c" ref="slide_box">
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
          <div
            class="w-all slide-box-content pos-abs"
            v-for = "(v,i) in slideArr"
            :key="i"
            :class="'bg-' + i"
          >
            {{ v }}
          </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Bar from "@/components/Bar.vue";

type DirectionVal = 'left'|'right'
@Component({
  components: {
    Bar,
  },
})
export default class SearchDetail extends Vue {
  private kw: string = "";
  private List: any[] = [];
  private slideArr: string[] = ["最热", "最新", "作者", "图片"];
  private slideIndex: number = 0;
  private direction: DirectionVal = 'right'
  private slideTop: number = 0
  private isTop: boolean = false

  get slideSty(): any {
    return {width: `calc(100% / ${this.slideArr.length})`,transform: `translateX(${100 * this.slideIndex}%)`};
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
    this.direction = this.slideIndex > i ? 'left' : 'right'
    this.slideIndex = i;
  }

  watchScroll() {
    let scroll:number = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll)
    this.isTop = scroll > this.slideTop 
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
    overflow-y: auto;
    &-content {
      
    }
  }
}
.bg {
  &-0 {
    background: #f8dddd22;
    height: 1200px;
  }
  &-1 {
    background: #fdf58d22;
    height: 700px;
  }
  &-2 {
    background: #8ddfdd22;
    height: 1000px;
  }
}
.left-enter-active,
.left-leave-active {
  transition: transform .6s linear;
  transform: translateX(0%);
}
.left-enter {
  transform: translateX(-100%);
}
.left-leave-to {
  transform: translateX(100%);
}

.right-enter-active,
.right-leave-active {
  transition: transform .6s linear;
  transform: translateX(0%);
}
.right-enter {
  transform: translateX(100%);
}
.right-leave-to {
  transform: translateX(-100%);
}
.navBarWrap {
  position:fixed;
  top:0;
  z-index:999;
}
</style>