<template>
  <div class="box-all">
    <Bar />
    <!-- <div class="f-16 color-3 t-center" v-if="List.length==0">
      找不到
    </div> -->
    <!-- <div v-else> -->
    <div class="h-all">
      <div class="slide-nav w-all f-aj-c">
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
      <div class="slide-content pos-rel box-all clear-fix">
        <transition :name="direction">
          <div
            class="w-all h-all slide pos-abs"
            :key="slideIndex"
            :class="'bg-' + slideIndex"
          >
            {{ slideIndex }}
          </div>
        </transition>
      </div>
    </div>
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
  private slideArr: string[] = ["最热", "作者", "图片"];
  private slideIndex: number = 0;
  private direction: DirectionVal = 'right'

  get slideSty(): string {
    return `transform: translateX(${100 * this.slideIndex}%)`;
  }
  mounted(): void {
    let { kw } = this.$route.query;
    this.kw = kw as string;
    console.log(kw);
    window.addEventListener('scroll',this.watchScroll)
  }

  // 请求相关数据
  getDetail() {}

  selectedIndex(i: number) {
    this.direction = this.slideIndex > i ? 'left' : 'right'
    this.slideIndex = i;
  }

  watchScroll(e: any) {
    console.log(e)
    
  }
}
</script>

<style lang="scss">
.slide-nav {
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
    width: calc(100% / 3);
    transition: transform 0.6s;
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
</style>