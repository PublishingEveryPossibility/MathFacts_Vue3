<template>
    <div id="home" class="container-fluid">
        <div id="Anagram" class="text-center d-flex justify-content-center">
      <div class="description mx-1 py-4 ">
           <h3 class="py-3"> Do you love WORDS?</h3>
            <p class="py-3" > With just 30 seconds on the clock how many words can you make with this Anagram Generator... </p> 
            <BtnAnag/>

        </div>
    </div>


    <div id="Math" class="text-center d-flex justify-content-center">

      <div class="description text-center p-4">
         <h3 class="p-3">Are you a Guru?</h3> 
       <p class="my-4">  For 30 seconds put your arithmetic to the test with 'Math Facts Practice'! </p>
       <BtnMath/>

    </div>
        </div>
    </div>
</template>
<script>
import BtnMath from '../buttons/BtnMath.vue';
import BtnAnag from '../buttons/BtnAnag.vue';


export default{
    name:'GameHome',
    components:{
        BtnMath,
        BtnAnag
    }
  
 
}
</script>
<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,600;1,300;1,500&family=Inconsolata:wght@200;300;400&family=Quicksand:wght@300;400&family=Yanone+Kaffeesatz:wght@300&display=swap');

*,
a{   
    font-family: 'Quicksand', sans-serif ;
    font-size:medium;
    text-decoration:none;
    list-style:none;
    overflow:hidden;
    
}

/* Page is set at 70vh */
.container-fluid{
    height:70vh;
    display:flex;
    flex-direction:row;
    overflow:hidden;
    justify-content: space-around;  
    max-width:80%;

}
.description{
    background-color: rgba(255, 166, 0, 0.864);
    border: 6px white solid;
    margin-top:10vh;
    max-width:50%;
}
.description:hover{
    opacity:85%;
    transition:300ms ease-in;
    background-color:rgb(72, 72, 161);
    color:white;
}
.description{
    margin-top:25vh;
    height:fit-content
}
</style>