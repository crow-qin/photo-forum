<template>
  <div class="pic-detail">
    <Bar :title="picDetail.username" />
    <div class="pic-content">
      <div class="pd-top f-wrap">
        <div class="avatar">
          <img class="auto-img" :src="picDetail.userUrl" alt />
        </div>
        <div class="f1">
          <div class="name">{{picDetail.username}}</div>
          <div class="date">{{picDetail.date|formatDate}}</div>
        </div>
        <div class="w-all f-14 m-t-8" v-if="picDetail.text">
          {{picDetail.text}}
        </div>
      </div>
      <WhiteSpace></WhiteSpace>
      <Swiper :imgList="picDetail.url" :curVal="initialIndex" @onClick="handleImgsClick" @changeValue="changeInitialIndex"></Swiper>
      <!-- <div class="pic-box">
        <div class="single-pic" v-for="(v,i) in picDetail.url" :key="i" @click="handleImgsClick(i)">
          <img class="auto-img" :src="v" alt />
        </div>
      </div> -->

      <div class="tip-box">
        <div class="good gw-part" :class="{'active':gActive}" @click="isGood">
          <i class="cubeic-good"></i>
          <span>{{picDetail.goodNum}}</span>
        </div>

        <div class="like gw-part" :class="{'active':lActive}" @click="isLike">
          <i class="cubeic-like"></i>
          <span>{{picDetail.likeNum}}</span>
        </div>
      </div>

      <WhiteSpace></WhiteSpace>

      <div class="comment-box">
        <h4>{{picDetail.comment&&picDetail.comment.length>0?'全部评论':'快来发第一条评论吧'}}</h4>
        <CommentItem v-for="(item,i) in picDetail.comment" :key="i+item.date" :item="item"></CommentItem>
      </div>
    </div>
    <div class="botton-bar">
      <input class="comment-ipt" type="text" placeholder="不评论一下..." v-model="text" />
      <div class="send-btn iconfont icon-fasongduilie" @click="sendComment"></div>
    </div>
  </div>
</template>
<script>
import Bar from "../components/Bar.vue";
import WhiteSpace from "../components/WhiteSpace.vue";
import CommentItem from "../components/CommentItem.vue";
import Swiper from "@/components/common/Swiper.vue";
import { mapState, mapMutations, mapGetters } from "vuex";
import * as types from "../store/mutation-types";
import { formatDate } from "../config/tool";

export default {
  data() {
    return {
      lActive: false,
      gActive: false,
      initialIndex: 0,
      text: ""
    };
  },
  computed: {
    ...mapState(["picList", "currentUser", "userList"]),
    ...mapGetters(["currentUserList"]),
    picDetail() {
      return this.picList.find(item => item.pid == this.$route.query.pid);
    }
  },
  filters: {
    formatDate
  },
    
  components: {
    Bar,
    WhiteSpace,
    CommentItem,
    Swiper
  },
  mounted() {
    this.initialTag();
  },
  methods: {
    ...mapMutations({
      changeGood: types.CHANGE_GOOD,
      changeLike: types.CHANGE_LIKE,
      changeTag: types.CHANGE_USER_TAG,
      addComment: types.ADD_COMMENT
    }),
    isLike() {
      this.lActive = !this.lActive;

      if (this.lActive) {
        this.changeLike({ flag: true, id: this.picDetail.pid });
        this.changeTag({ flag: true, id: this.picDetail.pid, type: "like" });
      } else {
        this.changeLike({ flag: false, id: this.picDetail.pid });
        this.changeTag({ flag: false, id: this.picDetail.pid, type: "like" });
      }
    },
    // 判断是否点赞
    isGood() {
      this.gActive = !this.gActive;
      if (this.gActive) {
        // 修改图片端的点赞数
        this.changeGood({ flag: true, id: this.picDetail.pid });
        // 修改用户点赞的图片数组
        this.changeTag({ flag: true, id: this.picDetail.pid, type: "good" });
      } else {
        this.changeGood({ flag: false, id: this.picDetail.pid });
        this.changeTag({ flag: false, id: this.picDetail.pid, type: "good" });
      }
    },
    initialTag() {
      if (this.currentUser.length == 0) {
        return;
      }
      let user = this.userList.find(item => item.uid == this.currentUser);
      if (user.good.indexOf(this.picDetail.pid) > -1) {
        this.gActive = true;
      }
      if (user.like.indexOf(this.picDetail.pid) > -1) {
        this.lActive = true;
      }
    },
    // 点击显示大图
    handleImgsClick(index) {
      // this.initialIndex = index;
      const params = {
        $props: {
          imgs: this.picDetail.url,
          initialIndex: "initialIndex", // 响应式数据的key名
          loop: false
        },
        $events: {
          change: i => {
            // 必须更新 initialIndex
            this.initialIndex = i;
          }
        }
      };
      this.$createImagePreview({ ...params }).show();
    },
    // 点击发送
    sendComment() {
      if (!this.text) {
        this.$createToast({
          txt: '请输入内容后再发送',
          type: 'txt',
          mask: true,
          time: 1000
        }).show()
        return;
      }
      let obj = {
        date: new Date().toString(),
        userName: this.currentUserList.name,
        userUrl: this.currentUserList.avatarUrl,
        content: this.text
      };
      this.addComment({ pid: this.$route.query.pid, obj });

      this.text = "";
    },
    changeInitialIndex(i) {
      console.log(i)
      this.initialIndex = i
    }
  }
};
</script>
<style lang="scss" scoped>
.pic-detail{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
}
.pic-content{
  flex: auto;
  overflow: auto;
}
.pd-top{
  display: flex;
  padding:15px;

  .avatar{
    width: 45px;
    height: 45px;
    background: #f0f0f0;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
  }

  .name{
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    max-width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .date{
    font-size: 13px;
    color: rgba(7,17,27,.5);
    line-height: 20px;
  }

  .detail-btn{
    height: 25px;     
    padding: 0 12px;
    line-height: 25px;
    transform: translateY(10px)
  }
}

.tip-box{
  overflow: hidden;
  font-size: 18px;
  padding:15px;
  
  .gw-part{
    float: left;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
  
    i,span{
      text-align: center
    }
    span{
      line-height:25px;
      font-size: 15px;
    }
  } 
}

.comment-box{
  padding:15px;

  h4{
    font-size: 14px;
  }
}

.pic-box{
  padding: 15px;
  overflow: hidden;

  .single-pic{
    width: 100%;
  }
}

.botton-bar{
  width: 100%;
  padding: 9px 13px;
  border-top: 1px solid rgba(7,17,27,.15);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .comment-ipt{
    width: 88%;
    outline: none;
    display: block;
    height: 25px;
    padding: 0 12px;
    color: #666;
    font-size: 12px;
    border-radius: 12px;
    border: 1px solid rgba(7,17,27,.1);
    box-sizing: border-box;
    background: rgba(7,17,27,.05)
    
  }
  .send-btn{
    color: rgba(7,17,27,.5);
    text-align: center;
    font-size: 20px;
  }
}
</style>

