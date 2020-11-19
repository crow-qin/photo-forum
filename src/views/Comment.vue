<template>
<div class="comment-page">
  <Bar />
  <div class="commnet-content"></div>
  <div class="header">
    <span>{{shortComment.length}}条短评</span>
    <span class="cubeic-select"></span>
  </div>
  <div class="short-box comment-list">
    <div class="item" v-for="v in shortComment" :key="v.time + v.id">
      <div class="item-top">
        <div class="avatar" :style="{background:'url('+v.avatar+') no-repeat center center'}"></div>
        <div class="author">{{v.author}}</div>
      </div>

      <div class="c-content">
        <div>{{v.content}}</div>

        <div class="c-time">{{formatTime(v.time)}}</div>

        <div class="r-item" v-if="v.reply_to != undefined">
          <div class="item-top">
            <div class="avatar" :style="{background:'url('+v.reply_to.avatar+') no-repeat center center'}"></div>
            <div class="author">{{v.reply_to.author}}</div>
          </div>

          <div class="c-content">
            <div>{{v.reply_to.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'vue-property-decorator'
import Bar from '../components/Bar.vue'

@Component({
  components: {
    Bar,
  },
})
export default class Comment extends Vue {
  public shortComment: any = []
  public longComment: any = []

  formatTime(time: string): string {
    let Y = new Date(time).toLocaleDateString()
    let h = new Date(time).getHours()
    let m = new Date(time).getMinutes()
    let s = new Date(time).getSeconds()

    return Y.split('/').join('-') + ' ' + h + ':' + m + ':' + s
  }

  mounted() {
    // tslint
    let i = 0;
    (this as any)
    .$http(
        '/api/4/story/' + (this as any).$route.params.id + '/long-comments'
      )
      .then((res: any) => {
        this.longComment = res.data.comments
        console.log(res.data)
      });
    (this as any)
    .$http(
        '/api/4/story/' + (this as any).$route.params.id + '/short-comments'
      )
      .then((res: any) => {
        this.shortComment = res.data.comments
        console.log(res.data)
      })
  }
}
</script>

<style lang="scss" scoped>
.comment-page {
  display: flex;
  flex-direction: column;

  .commnet-content {
    flex: auto;
  }
}

.header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid rgba(7, 17, 27, .3);
  line-height: 40px;
}

.comment-list {
  padding: 0 15px;
}

.item {
  padding: 10px 0;

  .item-top {
    display: flex;
    align-items: center;
    height: 45px;

    .avatar {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }

  .c-content {
    padding-left: 45px;
    font-size: 14px;
    line-height: 25px;
  }
}
</style>
