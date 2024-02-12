<template>
<div id="app">
 <div class="container-fluid">
<div id="nav">
<NavBar/>
<QuoteChange />
</div>


<div id="footer">
  <FooterBar/>
</div>
</div>
</div>

</template>
<script>
import NavBar from './components/static/NavBar.vue';
import FooterBar from './components/static/FooterBar.vue';
import QuoteChange from './components/static/QuoteChange.vue';

export default{
  name:'App',
  components:{
    NavBar,
    FooterBar,
    QuoteChange,

  }
  }
</script>

<style scoped>
#app{
  max-width:100vw;
}
.container{
  max-width:90vw;
}
*{
  background-color:beige;
  overflow:hidden;
  height:100vh;
}
#nav{
  display:block;
  height:10vh;
    
}
h1{
  display:block;
  position:absolute;
  margin-left:40%;
}
#footer{
  display:block;
}

.btn{
  margin:30vh 45vw;
  background-color:yellow;
  color:red;
  font-weight:650;
  font-size:xx-large;
  border-radius:30rem;
  border: 6px solid orange;
  width:15vw;
  height:30vh;
}

</style>