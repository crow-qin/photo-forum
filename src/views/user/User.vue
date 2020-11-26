<template>
  <div class="has-bar user">
    <div class="user-box" @click="openPage('user-center')">
      <div class="avatar">
        <img class="auto-img" :src="currentUserList.avatarUrl" alt />
      </div>
      <div class="user-name-box">
        <p class="user-name">{{currentUserList.name}}</p>
        <p class="user-id">
          <span>ID&nbsp;</span>
          <span>{{currentUserList.uid}}</span>
        </p>
      </div>

      <i class="cubeic-arrow more-arrow"></i>
    </div>
    <WhiteSpace></WhiteSpace>

    <div class="information-box">
      <h4 class="title">消息</h4>
      <div class="informate">
        <div class="i-item">
          <i class="iconfont icon-aixin i-icon" style="background:#E59292"></i>
          <span class="i-title">收到的喜欢</span>
        </div>
        <div class="i-item">
          <i class="iconfont icon-pinglun i-icon" style="background:#8FBCE1"></i>
          <span class="i-title">评论</span>
        </div>
        <div class="i-item">
          <i class="iconfont icon-taolunqu i-icon" style="background:#DCC489
          "></i>
          <span class="i-title">聊天</span>
        </div>
        <div class="i-item">
          <i class="iconfont icon-tixing i-icon" style="background:#DCA289"></i>
          <span class="i-title">通知</span>
        </div>
      </div>
    </div>

    <WhiteSpace></WhiteSpace>

    <div class="my-tag-box">
      <div class="my-good my-tag" @click="openPage('my-favorite',{type: 0})">
        <i class="iconfont icon-shoucang tag-part"></i>
        <div class="title-part">
          <span class="t-title">我的收藏</span>
          <i class="cubeic-arrow more-arrow"></i>
        </div>
      </div>
      <div class="my-like my-tag" @click="openPage('my-favorite',{type: 1})">
        <i class="iconfont icon-aixin tag-part"></i>
        <div class="title-part">
          <span class="t-title">我的喜欢</span>
          <i class="cubeic-arrow more-arrow"></i>
        </div>
      </div>

    </div>
      <div @click="openPage('test')">测试</div>
  </div>
</template>
<script>
import WhiteSpace from "@/components/WhiteSpace";
import { mapGetters } from "vuex";

export default {
  components: {
    WhiteSpace
  },
  computed: {
    ...mapGetters(["currentUserList"])
  },
  methods: {
    openPage(text, obj) {
      console.log('打开页面')
      this.$router.push({name: text, query: obj})
    }
  }
};
</script>
<style lang="scss" scoped>
.user{
  background: rgba(7, 17, 27, 0.08);
}
.user-box{
  width: 100%;
  padding: 20px 15px;
  display: flex;
  background: #fff;

  .avatar{
    width: 60px; 
    height:60px;
    border-radius: 50%;
    background: #f0f0f0;
    overflow: hidden;
  }

  .user-name-box{
    margin: 0 15px;
    flex: auto;

    .user-name{
      font-size: 16px;
      line-height: .7rem;
      color: #444;
    }

    .user-id{
      font-size: 13px;
      line-height: 25px;
      color: rgba(7,17,27,.5)
    }
  }

  .more-arrow{
    font-size: 16px;
    line-height: 60px;
    color: rgba(7,17,27,.3)
  }
}

// 消息
.information-box{
  font-size: 15px;
  background: #fff;

  .title{
    padding: 10px 15px;
    border-bottom: 1px solid rgba(7,17,27,.2)
  }

  .informate{
    display: flex;
    padding: 25px 20px;

    .i-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      font-size: 13px;
    }

    .i-icon{
      font-size: 18px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 31px;
      color: #fff;
      margin-bottom: 10px;
    }
  }
}

.my-tag-box{
  width: 100%;
  background: #fff;
  font-size: 15px;

  .my-tag{
    display: flex;
    align-items: center;

    .tag-part{
      font-size: 18px;
      padding: 0 15px;
      color: rgba(7,17,27,.3);
    }
  }

  .my-good .title-part{
    border-bottom: 1px solid rgba(7,17,27,.1);
  }

  .title-part{
    display: flex;
    flex: auto;
    padding: 15px 20px;
    padding-left: 0;
    
    .t-title{
      flex: auto;      
    }

    .more-arrow{
      color: rgba(7,17,27,.2);
    }
  }
}
</style>