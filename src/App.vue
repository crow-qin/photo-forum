<template>
  <div id="app">
    <router-view />

    <router-view name="tabbar"></router-view>
  </div>
</template>

<style lang="scss">

@import '../public/css/index.css';
@import '../public/css/resetcss.css';

html,
body {
  height: 100%;
  width: 100%;
}
#app {

  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.has-bar {
  flex: auto;
  /* display: flex;
  flex-direction: column; */
}
</style>
