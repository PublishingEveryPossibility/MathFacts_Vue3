<template>
    <div class="container-fluid  text-center">
    <p class="exWord text-center" id="exWord">{{ this.exWord }}</p>
    <div class="d-flex jusitfy-content-center text-center">
    <p class="row-1 px-4 my-2"><b class="p-4">Score:</b>{{ score }}</p>
    <p class="row-2 px-4 my-2"><b class="p-4">Time:</b>{{ timeLeft }}</p>
  </div>
    <p>({{ problemLeft  }} left)</p>
    <!--Needs to be formatted -->

</div>

<hr/>

</template>
<script>
export default{
    name:'GameHint',
    props:{
        exWord:String,
        score:String,
        problemLeft:String,
        timeLeft:String
    }
}

</script>
<style scoped>
  .exWord{
    color:rgba(255, 166, 0, 0.791);
    font-size:xx-large;
    font-weight:600;
    font-variant:small-caps;
    letter-spacing: .3rem;
    text-decoration:underline;
  }
 
  #score{
    padding-right:6rem;
  }
  #timeleft{padding-left:3rem;}
</style>;