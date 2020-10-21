<template>
  <div class="pic-item w-all bg-f clear-fix b-r-4 m-b-8" :style="rowStyle" @click="toDetail">
    <div ref="pic-box">
        <div class="pic-box w-all">
        <img :src="item.url[0]" class="auto-img">
        <i class="pic-count color-f" v-if="item.url.length>1">
          {{item.url.length}}
        </i>
      </div>

      <div class="f-w-bold color-3 w-all pic-text p-t-8 p-lr-8" v-if="item.text">
        {{item.text}}
      </div>

      <!-- 标签 -->

      <div class="f-a-c f-j-sb  p-lr-8" style="height: 35px">
        <div class="watch btn-part f-14" :class="{'active':lActive}" @click.stop="isLike">
          <i class="cubeic-like f-16"></i>
          <span>{{item.likeNum}}</span>
        </div>
      </div>
    </div>
    
  
    <!-- <div class="good-n-watch">
      <div class="good btn-part" :class="{'active':gActive}" @click="isGood">
        <i class="cubeic-good"></i>
        <span>{{item.goodNum}}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import * as types from "../store/mutation-types";
import { formatDate } from "../config/tool";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      lActive: false,
      gActive: false,
      rowStyle: 'grid-row: auto/span 10'
    };
  },
  computed: {
    ...mapState(["currentUser", "userList"]),

    pid() {
      return this.item.pid;
    }
  },
  filters: {
    formatDate
  },
  mounted() {
    this.initialTag();
    let self = this
    this.$nextTick(()=>{
      let img = new Image()
      img.src = self.item.url[0]
      img.onload = function() {

        let height = self.$refs['pic-box'].offsetHeight
        console.log(height)
        
        self.rowStyle = 'grid-row: auto/span ' + Math.ceil(height/10)
      }
    })
  },
  methods: {
    ...mapMutations({
      changeGood: types.CHANGE_GOOD,
      changeLike: types.CHANGE_LIKE,
      changeTag: types.CHANGE_USER_TAG
    }),
    isLike() {
      this.lActive = !this.lActive;

      if (this.lActive) {
        this.changeLike({ flag: true, id: this.pid });
        this.changeTag({ flag: true, id: this.pid, type: "like" });
      } else {
        this.changeLike({ flag: false, id: this.pid });
        this.changeTag({ flag: false, id: this.pid, type: "like" });
      }
    },
    // 判断是否点赞
    isGood() {
      this.gActive = !this.gActive;
      if (this.gActive) {
        // 修改图片端的点赞数
        this.changeGood({ flag: true, id: this.pid });
        // 修改用户点赞的图片数组
        this.changeTag({ flag: true, id: this.pid, type: "good" });
      } else {
        this.changeGood({ flag: false, id: this.pid });
        this.changeTag({ flag: false, id: this.pid, type: "good" });
      }
    },
    // 跳转至详情
    toDetail() {
      this.$router.push({ path: "/pdetail", query: { pid: this.pid } });
    },
    // 判断是否有登录 且是否有点赞或喜欢
    initialTag() {
      if (this.currentUser.length == 0) {
        return;
      }
      let user = this.userList.find(item => item.uid == this.currentUser);
      if (user.good.indexOf(this.pid) > -1) {
        this.gActive = true;
      }
      if (user.like.indexOf(this.pid) > -1) {
        this.lActive = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pic-item{

  .good-n-watch{
    overflow: hidden;

    .btn-part{
      float: left;

      span{
        padding-left: .1rem;
      }     
    }

    .good{
      margin-right: .6rem;
    }
  }
}
.pic {
  &-box {
    position: relative;
  }
  &-text {
    white-space:initial;
    max-height: calc(44px + 8px);
    overflow: hidden;
    position: relative;
    line-height: 22px;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      height: 22px;
      width: 20%;
      background: linear-gradient(to right, rgba(#fff,0.1), rgba(#fff,.8));
    }
  }
  &-count {
    position: absolute;
    bottom: 12px;
    right: 12px;
    line-height: 15px;
    font-size: 12px;
    color: #fff;
    padding: 0 4px;
    background: rgba(0,0,0,.4);
  }
}
</style>
<style lang="scss">
.active{
  color: #ff0033;
}
</style>