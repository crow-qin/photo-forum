<template>
  <div class="has-bar home bg-f8">
    <Bar :isSearch="true" @tapSearch="openPage" />
    <div class="showing-box">
      <Tabcomposite></Tabcomposite>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from "@/components/Bar.vue";
import Tabcomposite from "@/components/Tabcomposite.vue";

export default {
  name: "home",
  components: {
    Bar,
    Tabcomposite
  },
  data: () => ({
    zhList: []
  }),
  mounted() {

  },
  methods: {
    openPage() {
      this.$router.push('/search')
    }
  }
};
</script>

<style lang="scss" scoped>
.home{
  overflow: auto;
  
  ::-webkit-scrollbar{
    width: 0;
  }
}

.showing-box{
  font-size: .32rem; 
}

</style>