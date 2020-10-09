<template>
  <div>
    <cube-tab-bar
      v-model="selectedLabel"
      :data="tabs"
      show-slider
      :use-transition="disabled"
      @click="changeTab"
      ref="tabNav"
    ></cube-tab-bar>
    <div class="tab-slide-container">
      <cube-slide
        ref="slide"
        :loop="false"
        :initial-index="initialIndex"
        :auto-play="false"
        :show-dots="false"
        :options="slideOptions"
        @scroll="scroll"
        @change="changePage"
      >
        <cube-slide-item>
          <div class="pic-content p-8" v-if="picList.length>0">
            <Picitem v-for="v in picList" :key="v.pid" :item="v" />
          </div>
        </cube-slide-item>
        <cube-slide-item>
          <ZhItem v-for="v in zhList" :key="v.id" :item="v" />
          
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Picitem from "../components/Pic-item";
import ZhItem from "../components/ZhItem";
import { mapState } from "vuex";

export default {
  components: {
    ZhItem,
    Picitem
  },
  data: () => ({
    zhList: [],
    disabled: false,
    selectedLabel: '',
    tabs: [
      {
        label: "最新动态"
      },
      {
        label: "热门话题"
      }
    ],
    initialIndex: 0,
    slideOptions: {
      listenScroll: true,
      probeType: 3,
      /* lock y-direction when scrolling horizontally and  vertically at the same time */
      directionLockThreshold: 0
    },
    scrollOptions: {
      /* lock x-direction when scrolling horizontally and  vertically at the same time */
      directionLockThreshold: 0
    },
    windowWidth: 0
  }),
  watch: {
    'initialIndex': {
      handler(now) {
        this.selectedLabel = this.tabs[now].label
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(["picList"])
  },
  mounted() {
    this.$http("/api/4/news/latest").then(res => {
      console.log(res.data);
      this.zhList = [...res.data.stories, ...res.data.top_stories];
      // console.log(this.zhList);
    });
    // 我可以写什么
    this.windowWidth = document.documentElement.clientWidth
    console.log(this.windowWidth)
  },

  methods: {
    changePage(current) {
      this.initialIndex = current;
    },
    changeTab(val) {
      // this.selectedLabel = val
      this.initialIndex = this.tabs.findIndex(item=>(item.label == val))
    },
    scroll(pos) {
      const x = Math.abs(pos.x);
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth;
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth;
      const deltaX = (x / slideScrollerWidth) * tabItemWidth;
      this.$refs.tabNav.setSliderTransform(deltaX);
    }
  },
};
</script>

<style lang="scss" scoped>
.cube-tab-bar{
  height: 35px;;
}

.tab-slide-container{
  position: fixed;
  top: 74px;
  left: 0;
  right: 0;
  bottom: 0;
}

.cube-tab-bar-slider{
  background-color: #99ccff;
}

.tab-slide-container{
  position: relative;
  top: 0;
}
.pic-content {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 4px));
  grid-template-rows: auto;
  grid-auto-flow: row dense;  // 是否自动补齐空白
  grid-auto-rows: 10px; // base高度，grid-row基于此运算
  grid-gap: 0 8px;
  // column-count: 2;
  // column-gap: 8px;
  // page-break-inside: avoid;
  // break-inside: avoid;
}
</style>

<style lang="scss">
.cube-tab-bar-slider{
  background-color: #99ccff;
}

.cube-tab_active{
  color: #99ccff;
}
</style>