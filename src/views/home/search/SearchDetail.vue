<template>
  <div class="box-all">
    <Bar />
    <div class="f-16 color-3 t-center" v-if="List.length==0">
      找不到
    </div>
    <div v-else>详情</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Bar from '@/components/Bar.vue'

@Component({
  components: {
    Bar
  }
})
export default class SearchDetail extends Vue {
  private kw: string = ''
  private List: any[] = []


  mounted(): void {
    let {kw} = this.$route.query
    this.kw = kw as string
    console.log(kw);
  }

  // 请求相关数据
  getDetail() {
    
  }
}
</script>

<style>

</style>