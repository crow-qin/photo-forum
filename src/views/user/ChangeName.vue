<template>
  <div class="box-all bg-f8">
    <Bar title="修改昵称" />
    <div class=" m-t-8"></div>
    <FormItem text="修改昵称" :clickable="false" @hook:mounted="handleMounted">
      <input v-model="nickname" :focus="isFocus" class="ipt f-14 m-l-8" :class="{'t-right': !isFocus}" type="text" @click="onClick" @blur="isFocus = false">
    </FormItem>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Bar from "@/components/Bar.vue";
import FormItem from '@/components/common/FormItem.vue'

// 使用前需要注册
Component.registerHooks([
  'beforeRouteLeave',
]);
@Component({
  components: {
    Bar,
    FormItem
  }
})
export default class ChangeName extends Vue {
  private nickname: string = ''
  private oldname: string = ''
  private isFocus: boolean = false

  mounted() {
    this.oldname = this.nickname
    console.log('父组件')
  }

  beforeRouteLeave(to:any,from: any,next:any) {
    console.log('销毁前')
    let title = ''
    if(this.nickname.length==0) {
      // title = 
    }
    let self = this
    this.$createDialog({
      type: 'confirm',
      icon: 'cubeic-alert',
      title: '是否保存该修改',
      content: '',
      confirmBtn: {
        text: '确定',
        active: true,
        disabled: false,
      },
      cancelBtn: {
        text: '取消',
        active: false,
        disabled: false,
      },
      onConfirm: () => {
        next()
      },
      onCancel: () => {
        
      }
    }).show()
  }

  onClick() {
    this.isFocus = true
  }

  handleMounted() {
   console.log('子组件')
  }
}
</script>

<style>
.ipt {
  flex-grow: 1;
  padding: 0 8px;
  flex-basis: auto;
}
</style>