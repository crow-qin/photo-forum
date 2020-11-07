<template>
  <div class="box">
    <ul
      class="list"
      ref="list"
    >
      <li v-for="(item, i) in num" :key="i" :style="{ background: item.color }">
        <!-- {{i}} -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: [
        {
          color: "#f00",
          vaL: 1,
        },
        {
          color: "#0f0",
          vaL: 2,
        },
        {
          color: "#00f",
          vaL: 3,
        },
        {
          color: "#f00",
          vaL: 1,
        },
      ],
      timer: null,

      index: 0,
      DURATION: 2000,
    };
  },

  methods: {
    autoPlay: function () {
        let list =this.$refs.list
      setInterval(() => {
        this.index++
        list.style.transition='left 1s'
        list.style.left=-this.index+'rem'
        if(this.index===this.num.length-1){
                setTimeout(()=>{

                    list.style.transition='left 0s'
                this.index=0
                list.style.left='0px'
                },1000)
        }
        

      }, this.DURATION);
    },
  },
  mounted() {
    this.autoPlay();
  },
};
</script>

<style scoped>
.box {
  position: relative;

  width: 1rem;
  height: 1rem;
  overflow: hidden;
  margin: 1rem auto 0;
}

.list {
  position: absolute;
  top: 0;
  left: 0;
  width: 4rem;
  height: 100%;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.5s;
}

.list > li {
  width: 1rem;
  height: 1rem;
  text-align: center;
  color: #000;
  font-size: 23px;
}

.active{
    border: 5px solid #000;
}
</style>