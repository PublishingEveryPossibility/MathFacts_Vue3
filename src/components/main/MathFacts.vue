<template>
    <main id="main-container">
  <!--Select Menu-->
      <div v-if="screen === 'config'" id="config-container">
        <h1>Mathificent</h1>
        <SelectMenu :currentValue="operation" label="Operation"
          id="operation" v-model="operation" :options="operations" @input="(o)=>(this.operation = o)" />
        <SelectMenu :currentValue="maxNumber" label="Maximum Number"
          id="max-number" v-model="maxNumber" :options="numbers" @input="(m)=>(this.maxNumber = m)"/>

<!--Button-->

  <button type="button" class="form-control btn btn-primary" @click="play()">Play</button>


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

        <template v-else-if="timeLeft > 0">

    <!--Calc Buttons-->  
     <!--<transition name="slide-right">--> 
        <div :class="equationClass" id="equation">
      <GameEquation :question="question"
        :answer="input"
        :answered="answered" id="fonteq" />
    </div>
    
  
        <div id="calcbuttons">
          <div class="row" id="buttons">
      <div class="col">
        <button class="btn btn-primary number-button"
          v-for="button in buttons" :key="button"
          @click="setInput(button)">{{button}}</button>
        <button class="btn btn-primary" id="clear-button"
          @click="clear()">Clear</button>
      </div>
      </div>
    </div>
    
</template>
  </div>





 <!--Scoreboard--> 
  <template v-else>
    <div class="row border-bottom" id="scoreboard">
      <div class="col px-3 text-left">
        <GameScore :score="score" />
      </div>
      <div class="col px-3 text-right">
        <GameTimer />
      </div>
    </div>
  

      
  </template>
        
  
  
  
    </main>
  </template>
  
  <script>
    import SelectMenu from '../static/SelectMenu';
    import GameScore from '../static/GameScore';
    import GameTimer from '../static/GameTimer';
    import GameEquation from '../static/GameEquation';
    import {randInt} from '../helpers/helpers';
    
    export default {
      name: 'MainContainer',
      components: {
        SelectMenu,
        GameScore,
        GameTimer,
        GameEquation
      },
      data: function() {
        return {
          operations: [
            ['Addition', '+'],
            ['Subtraction', '-'],
            ['Multiplication', 'x'],
            ['Division', '/']
          ],
          operation: 'x',
          maxNumber: '10',
          screen: 'config',
          buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
          input: '',
          operands: {num1: '1', num2: '2'},
          answered: false,
          score: 0,
          gameLength: 60,
          timeLeft:0
        }
      },
      methods: {
        config() {
          this.screen = "config";
        },
        play() {
          this.screen = "play";
          this.newQuestion();
          this.startTimer();
        },
        setInput(value) {
          this.input += String(value);
          this.input = String(Number(this.input));
          this.answered = this.checkAnswer(
                                      this.input,
                                      this.operation,
                                      this.operands);
              if (this.answered){
              setTimeout(this.newQuestion, 300);
              this.score++;
           }
        },
        clear() {
          this.input = '';
        },
        getRandNumbers(operator, low, high) {
              let num1 = randInt(low, high);
              let num2 = randInt(low, high);
              const numHigh = Math.max(num1, num2);
              const numLow = Math.min(num1, num2);
    
    if(operator === '-') { // Make sure higher num comes first
      num1 = numHigh;
      num2 = numLow;
    }
    
    if(operator === '/') {
      if (num2 === 0) { // No division by zero
        num2 = randInt(1, high);
      }
      num1 = (num1 * num2);
    }
    return {num1, num2};
  },
      checkAnswer(userAnswer, operation, operands) {
    if (isNaN(userAnswer)) return false; // User hasn't answered
    
    let correctAnswer;
    switch(operation) {
      case '+':
        correctAnswer = operands.num1 + operands.num2;
        break;
      case '-':
        correctAnswer = operands.num1 - operands.num2;
        break;
      case 'x':
        correctAnswer = operands.num1 * operands.num2;
        break;
      default: // division
        correctAnswer = operands.num1 / operands.num2;
    }
    return (parseInt(userAnswer) === correctAnswer);
  },
      newQuestion() {
          this.input = '';
          this.answered = false;
          this.operands = this.getRandNumbers(
            this.operation, 0, this.maxNumber
          );
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
          this.newQuestion();
        },
        handleKeyUp(e) {
    e.preventDefault(); // prevent the normal behavior of the key
    if (e.keyCode === 32 || e.keyCode === 13) { // space/Enter
      this.clear();
    } else if (e.keyCode === 8) { // backspace
      this.input = this.input.substring(0, this.input.length - 1);
    } else if (!isNaN(e.key)) {
      this.setInput(e.key);
    }
  }
        
      },
        
  
      computed:{
          numbers: function(){
              const numbers = [];
              for (let number= 2; number<= 100; number++){
                  numbers.push([number,number]);
              }
              return numbers;
          },
          question: function(){
              const num1 = this.operands.num1;
              const num2 = this.operands.num2;
              const equation = `${num1} ${this.operation} ${num2}`;
              return equation; 
          },
          equationClass: function() {
          if (this.answered) {
            return 'row text-primary my-2 fade';
          } else {
            return 'row text-secondary my-2';
          }
  
      }
      }
  }
  
  </script>
  <style scoped>
#main-container{
  margin:25vh 35vw;
}
  button.number-button {
      border-radius: .25em;
      font-size: 3em;
      height: 2em;
      margin: .1em;
      text-align: center;
      width: 2em;
    }
  
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
 #fonteq{
  display:flex;
  font-weight:600;
  font-size:xx-large;
  color:orange;
  margin-left:10vw;
 }

  </style>