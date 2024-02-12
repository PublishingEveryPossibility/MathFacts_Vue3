<template>
    <main id="main-container">
      <div id="all">
  <!--Select Menu-->
      <div v-if="screen === 'config'" id="config-container">
        <h1>Anagram Hunt</h1>
     <SelectMenu id="wordLength" :currentValue="maxNumber" :options="numbers" v-model="maxNumber" label="Word Length" @input="(m)=>(this.maxNumber = m)"/> 
       <div id="instructions">

        <ol class="container-fluid p-2">
            <li class="p-2">Choose word length.</li>
            <li class="p-2">Press <b>Play!</b></li>
            <li class="p-2">How many Anagrams can you find in a minute?</li>

            </ol>
       </div>

<!-- PlayButton-->

  <button type="button" class="form-control btn btn-primary" @click="createProblem()" >Play</button>


        </div>

    
      <div v-else-if="screen === 'play'" id="game-container" class="text-center">
 
  
   <!--Time is Up-->

     <template v-if="timeLeft === 0">
      
    <div>
          <h2>Times Up!</h2>
            <strong class="big">You Answered</strong>
          <div class="huge">{{ score }}</div> 
            <strong class="big"> Questions Correctly</strong>
            <button class="btn btn-primary form-control m-1" v-on:click="restart()">Play Again with Same Settings</button>
            <button class= "btn btn-secondary form-control m-1" v-on:click="config()">Change Settings</button>
          </div>
        </template>
  

<!-- Game -->
<template v-else-if="timeLeft > 0">

        <div class="p-2 text-center"  id="anagram">
        <GameHint :score="score" :timeLeft="timeLeft" :exWord="exWord" :problemLeft="problemLeft" />  
        <input id="userInput" placeholder="type here" type="text" class="form-control row-3 text-center" @keyup.enter="checkAnswer()" :currentValue="currentValue" v-model="currentValue" />

            <ol>
         <li class="listItem" v-for="(word,index) in correctAnswers" :key="index">{{ this.correctAnswers[index] }}</li>          
          </ol>
        </div>
      </template>
          </div>

      </div>

    </main>
  </template>

  <script>
    import SelectMenu from '../static/SelectMenu';
    import GameHint from '../static/GameHint.vue';
    import {anagrams} from './anagrams.js';

export default {
      name: 'MainContainer',
      components: {
        SelectMenu,
        GameHint
        
      },
data: function() {
    return {
         
          numbers:['5','6','7','8'],
          score: 0,
          gameLength: 60,
          timeLeft:0,
          screen:'config',
          maxNumber: '6',
          exWord:'word',
          correctAnswers:[],
          problemLeft:0,
          anagrams: anagrams,

        }
      },

  methods: {
      createProblem(){
          this.play()
          const wordLength = Number(this.maxNumber);
          const problemWords = this.anagrams[wordLength]
          const randNumb = Math.floor(Math.random() * (problemWords.length))
          this.problemGroup = problemWords[randNumb]
          this.arrayPos = (this.problemGroup.length % 2)
          this.exWord = this.problemGroup[this.arrayPos]
          //filters out example word from problemGroup array
          this.problemGroup = this.problemGroup.filter(word => word !== this.exWord)
               return (this.problemGroup, this.exWord, this.arrayPos)


              },
        checkAnswer(){
          console.log(this.problemGroup)
            for(const word of this.problemGroup){
                if(word === this.currentValue){
                     this.score++;
                    console.log(this.correctAnswers)
                     this.answer = (this.problemGroup.filter(word => word === this.currentValue));
                     this.correctAnswers.push(this.answer)
                     console.log(this.answer)
                     this.problemGroup = this.problemGroup.filter( word => word !== this.currentValue);
                  
                     this.problemLeft = (this.problemGroup.length)
                     
                    if(this.problemLeft === 0){
                      this.arrayPos++
                      this.createProblem()
                    }

               
               return true;
              }else{console.log('answer is incorrect')}
            }
           
              },
        createList(){
          this.screen = 'correctAnswer'
        },
        play() {
          this.screen = "play";
          this.startTimer();
        },
        clear() {
          this.input = '';
        },
        startTimer() {
          window.addEventListener('keyup',this.handleKeyUp);
           this.timeLeft = this.gameLength;
            if (this.timeLeft > 0) {
            this.timer = setInterval(() => {
             this.timeLeft--;
            if (this.timeLeft === 0) {
              clearInterval(this.timer);
              window.removeEventListener('keyup',this.handleKeyUp);
        }
      }, 1000)
    }
  },
  restart(){
          this.score = 0;
          this.startTimer();
          this.createProblem();
        },
        
  config(){
this.screen='config'
        }
        
}}
  </script>
  <style scoped>
  p{
    font-size:medium;
    font-weight:600;
  }
  #score{
    padding-right:6rem;
  }
  #timeleft{padding-left:6rem;}
  #inputText{
    display:block;
    width:10vw;}
  #all{
  margin:30vh 35vw;
      }
  button.number-button {
      border-radius: .25em;
      font-size: 3em;
      height: 2em;
      margin: .1em;
      text-align: center;
      width: 2em;
    }
   #userInput{
    margin-left:35%;
    width:30%;}
    #clear-button {
      border-radius: .25em;
      font-size: 3em;
      height: 2em;
      margin: .1em;
      text-align: center;
      width: 4.2em;
    }
  
    #scoreboard {
      font-size: 1.5em;
    }
    .fade-enter-from {
      opacity: 0;
    }
  
    .fade-enter-active {
      transition: opacity 5s;
    }
  
    .fade-enter-to {
      opacity: 1;
    }
  
    .fade-leave-from {
      opacity: 1;
    }
  
    .fade-leave-active {
      transition: opacity 5s;
    }
  
    .fade-leave-to {
      opacity: 0;
    }
    .big {
      font-size: 1.5em;
    }
  
    .huge {
      font-size: 5em;
    }
    .slide-leave-active,
    .slide-enter-active {
      position: absolute;
      top: 56px;
      transition: 1s;
      width: 380px;
    }
  
    .slide-enter-from {
      transform: translate(-100%, 0);
      transition: opacity .5s;
    }
  
    .slide-leave-to {
      opacity:0;
      transform: translate(100%, 0);
    }
  
    .slide-right-leave-active,
    .slide-right-enter-active {
      position: absolute;
      top: 56px;
      transition: 1s;
      width: 380px;
    }
  
    .slide-right-enter-from {
      transform: translate(100%, 0);
      transition: opacity .5s;
    }
  
    .slide-right-leave-to {
      opacity:0;
      transform: translate(-100%, 0);
    }
 #startplaying{
  padding-right:45%;
  padding-left:45%;
 }
  .listItems{
    color:green;
    font-weight:600;
    font-variant: small-caps;
  }
  </style>s