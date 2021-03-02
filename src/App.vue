<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin:0;padding:0;list-style:none;}
html{font-size:6.2vw;height:100%;width:100%;overflow:hidden;}
body{font-size:.6rem;height:100%;overflow:auto;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
}

    .viewer-toolbar > ul > li{width:1.75rem;height:1.75rem;text-align:center;}

    .viewer-toolbar > ul > li::before{display:inline-block;margin-top:.45rem;}
    .viewer-toolbar > ul > li + li{margin-left:5px;}
    .viewer-flip-horizontal,.viewer-flip-vertical,.viewer-rotate-right,.viewer-rotate-left,.viewer-play{display:none;}
    .viewer-title{display:none;}
@media only screen  and (orientation:landscape) {
 .viewer-toolbar > ul > li{width:1.1rem;height:1.1rem;}
 .viewer-toolbar > ul > li::before{margin-top:.35rem;}
}
@media screen and (min-width: 750px) {
    html {
       font-size:20px;
    }
    h1{font-size:20px;}
    .wrap{width:750px;margin:0 auto;}


    .viewer-toolbar > ul > li{width:48px;height:48px;}
    .viewer-toolbar > ul > li::before{margin-top:13px;}
}
</style>
