<template>
      
      <div>
          <h2>Times Up!</h2>
            <strong class="big">You Answered</strong>
          <div class="huge">{{ score }}</div> 
            <strong class="big"> Questions Correctly</strong>
            <button class="btn btn-primary form-control m-1" v-on:click="restart()">Play Again with Same Settings</button>
            <button class= "btn btn-secondary form-control m-1" v-on:click="config()">Change Settings</button>
          </div>


</template>
<script>
export default{
    name:'TimesUp',


    methods: {
        config() {
          this.screen = "config";
        },
        restart(){
          this.score = 0;
          this.startTimer();
          this.newQuestion();
        }
    }



}



</script>