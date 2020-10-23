<template>
<div class="zh-detail">
  <Bar :title="data.title" />

  <div class="url-part" @scroll="tabToggle">
    <div class="zh-bg-box" :style="{background:'url('+data.image+') no-repeat center center', 'background-size': 'cover'}">
      <!-- <img :src="data.image" class="zh-bg auto-img" :alt="data.title" /> -->
    </div>
    <div class="zh-content" v-html="data.body"></div>
  </div>
  <div class="tab" ref="tab">
    <div @click="toCmment">
      <span class="iconfont icon-pinglun i-icon"></span>
      {{comment_n_popular.comments}}
    </div>
    <div>
      <span class="iconfont icon-dianzan i-icon"></span>
      {{comment_n_popular.popularity}}
    </div>
  </div>
</div>
</template>

<script>
import Bar from "../components/Bar";

export default {
  components: {
    Bar
  },
  data: () => ({
    data: {},
    comment_n_popular: {},
    pagey: 0
  }),
  watch: {
    pagey(v, nv) {
      console.log(v, nv);
      if (v > nv) {
        console.log("hidde");
        this.$refs.tab.style.display = "none";
      } else {
        console.log("show");

        this.$refs.tab.style.display = "flex";
      }
    }
  },
  methods: {
    tabToggle(e) {
      this.pagey = e.srcElement.scrollTop;
      // console.log(e.srcElement.scrollTop);
    },
    toCmment() {
      this.$router.push({
        name: "comment",
        params: {
          id: this.$route.params.id
        }
      });
    }
  },

  mounted() {
    // 日报详情
    this.$http("/api/4/news/" + this.$route.params.id).then(res => {
      this.data = res.data;
      console.log("data", this.data);
    });
    // 评论点赞数
    this.$http("/api/4/story-extra/" + this.$route.params.id).then(res => {
      this.comment_n_popular = res.data;
      console.log(res.data);
    });
  }
};
</script>

<style lang="scss" scoped>
.zh-detail {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  p {
    flex: 0 0 .6rem;
  }

  .url-part {
    flex: auto;
    overflow: auto;
    position: relative;

    .zh-bg-box {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-size: cover;
      height: 200px;
    }
  }

  .tab {
    flex: 0 0 .88rem;
    height: .88rem;
    display: flex;
    align-items: center;
    color: rgba(7, 17, 27, .7);
    padding: 0 .4rem;
    transition: all .5s linear;

    .i-icon {
      font-size: .35rem;
      padding-left: .3rem;
    }
  }
}
</style><style scoped>
@import '../../public/css/news.css';
</style>
