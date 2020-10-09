<template>
  <div class="add-page">
    <Bar title="分享" />
    <div class="add-box">
      <cube-textarea
        class="title"
        :maxlength="50"
        placeholder="此刻的想法..."
        v-model="value"
        indicator="indicator"
      ></cube-textarea>
    </div>
    <div class="pic-list">
      <!-- <cube-upload
        ref="upload"
        :action="action"
        :max="3"
        :auto="false"
        :simultaneous-uploads="1"
        @files-added="fileAdded"
        @file-removed="removedFile"
      />-->
      <cube-upload
        ref="upload"
        v-model="files"
        :action="action"
        @files-added="fileAdded"
        @file-error="errHandler"
        @file-removed="removedFile"
      >
        <div class="clear-fix d-flex">
          <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
          <cube-upload-btn :multiple="false" :class="{hidde:imgList.length==3}">
            <i class="iconfont icon-tianjia1"></i>
          </cube-upload-btn>
        </div>
      </cube-upload>
    </div>
    <div class="send-btn" :class="{active}" @click="send">发布</div>
  </div>
</template>

<script>
import Bar from "@/components/Bar";
import { mapMutations, mapGetters } from "vuex";
import * as types from "@/store/mutation-types";
export default {
  components: {
    Bar
  },
  data: () => ({
    ndicator: {
      negative: true,
      remain: true
    },
    value: "",
    action: {
      target: "//jsonplaceholder.typicode.com/photos/",
      prop: "base64Value"
    },

    files: [],
    imgList: []
  }),
  computed: {
    active() {
      return this.imgList.length > 0 ? true : false;
    },
    ...mapGetters(["currentUserList"])
  },

  methods: {
    fileAdded(files) {
      console.log(files);
      let hasIgnore = false;
      const limitSize = 1 * 1024;
      // 最大5M
      const maxSize = 5 * 1024 * 1024;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let id = new Date().getTime();
        file.id = id;
        console.log(file);
        // 如果选择的图片大小最大限制（这里为5M）则弹出提示
        if (file.size > maxSize) {
          file.ignore = true;
          hasIgnore = true;
          break;
        }
        // 如果选择的图片大小大于1M则进行图片压缩处理（Base64）
        if (file.size > limitSize) {
          this.compressPic(file, id);
        } else {
          let reads = new FileReader();
          reads.readAsDataURL(file);
          let that = this;
          reads.onload = function() {
            // console.log(e);

            var bdata = this.result;
            that.imgList.push({ url: bdata, id });
          };
        }
      }
      hasIgnore &&
        this.$createToast({
          type: "warn",
          time: 1000,
          txt: "图片最大支持5M"
        }).show();
    },

    // 图片压缩方法
    compressPic(file, id) {
      let reads = new FileReader();
      reads.readAsDataURL(file);
      // 注意这里this作用域的问题
      let that = this;
      reads.onload = function() {
        // console.log(e);
        var bdata = this.result;
        // 这里quality的范围是（0-1）
        var quality = 0.1;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = bdata;
        img.onload = function() {
          var width = img.width;
          canvas.width = width;
          canvas.height = width * (img.height / img.width);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          let data = canvas.toDataURL("image/jpeg", quality);
          that.imgList.push({ url: data, id });
        };
      };
    },
    // 移除imgList中被删除的图片
    removedFile(file) {
      let id = file.file.id;
      this.imgList = this.imgList.filter(item => item.id !== id);
      // let url = file.url

      console.log(file);
    },
    errHandler() {
      // const msg = file.response.message
      this.$createToast({
        type: "warn",
        txt: "Upload fail",
        time: 1000
      }).show();
    },
    // 发送
    send() {
      if (!this.active) {
        return;
      }
      let url = this.imgList.map(item => item.url);
      let date = new Date();
      console.log(this.currentUserList);
      let pic = {
        pid: "p" + date.getTime(),
        date: date.toString(),
        text: this.value,
        url,
        likeNum: 0,
        goodNum: 0,
        userUrl: this.currentUserList.avatarUrl,
        username: this.currentUserList.name
      };
      console.log(pic);
      this.addPic(pic);
      this.$router.replace({ name: "home" });
    },
    ...mapMutations({
      addPic: types.ADD_PIC
    })
  }
};
</script>

<style lang="scss" scoped>
.add-page{
  display: flex;
  width:100%;
  height: 100%;
  flex-direction: column;
   background: rgba(7,17,27,.018);
}
.add-box{
  margin:.3rem 0;
  
  .title{
    height: 1.8rem;
    border: none;
    resize: none;
    outline: none; 
  }
}

.back-title{
  background: transparent;
  border-bottom: none;
}
.pic-list{
  padding: .2rem;
  
  .add-pic{
    width: 1.2rem;
    height: 1.2rem;
    font-size: 1.2rem;
    color:#999;
    text-align: center;
    font-weight: 500;
    
    .added{
      font-size: 0;
      display: none;
    }    
  }
}
.send-btn{
  width: 100%;
  line-height: .8rem;
  background: rgba(7,17,27,.3);
  color:#333;
  font-weight: 530;
  text-align: center;
  letter-spacing:3px;

  &.active{
    background: #99ccff;
    color: #fff;
  }
}


.cube-upload{
  .cube-upload-file, .cube-upload-btn{
    margin: 0;
    height: 1.6rem;
    }
  .cube-upload-file{
    padding-right:calc((100% - 4*1.6rem)/3);
   
  }
  .cube-upload-file-def{
    width: 100%;
    height: 100%;
    .cubeic-wrong{
      display: none
    }
  }
  .cube-upload-btn{
    display: flex;
    width: 1.6rem;  
    }
    
    i{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.6rem;
      height: 1.6rem;
      // margin-bottom: 20px;
      font-size: .5rem;
      line-height: 1;
      font-style: normal;
      color: #666;
      background-color: #fff;
      // border-radius: 50%;
  }
  .d-flex{
    display:flex;
    // justify-content: space-between;
  }
  .hidde{
    display: none;
  }
}
</style>