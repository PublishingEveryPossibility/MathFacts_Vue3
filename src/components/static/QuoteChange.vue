 <!--Quote Change-->
  <template>
 <div class="container-fluid" v-for="(id, index) in slides" :key="index">
    <div class="slide d-flex" :class="{ 'active': isActiveSlide(index) }">
      <p class="quote justify-content-center row-1 p-2 my-2">{{ id.quote }}</p>
      <h5 class="author row-2">- {{ id.author }}</h5>
    </div>
  </div>
</template>
<script>
export default{
    name:'QuoteChange',
    data:function(){
    return{
        slides:[
        {
          id:1,
          author:"Rosa Parks",
          quote:"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom."
        },
        {
          id:2,
          author:"Etty Hillesum",
          quote:"Sometimes the most important thing in a whole day is the rest we take between two deep breaths."
        },
        {
          id:3,
          author:"Les Paul",
          quote: "Don’t say you can’t until you prove you can’t."
        }
      ],
      currentSlide: 0,
      interval: null
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    isActiveSlide(index) {
      return this.currentSlide === index;
    },
    nextSlide() {
      if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 10000);
    }}

}
</script>
<style scoped>
.container-fluid{
  max-width:30%
}
.slide {
  transition: opacity 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 20vw;
  width: 30%;
  height: 10%;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}
.quote{
    font-weight:600;
    
    }
    
h5{
  width:30vw;
  margin-top:8vh;
}
</style>