<template>
   
<form>
  <div id="signUp">
    <h3>Register</h3>
  <label for="email">Email:</label>
  <input class="p-1 m-1 form-control" placeholder="Email" type="text" id="email"/>
  <label for="password">Password:</label>
  <input class="p-1 m-1 form-control" placeholder="*****" type="password"/>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="permission">
  <label class="form-check-label" for="permission">I am over 13 and like playing games</label>
</div>
  <button @onclick ="alertSubmit($event)" >Login</button>
  <router-link to="/LoginGuest" class="button p-1">Have an account? Log in.</router-link>
  <!--Alert Form was Submitted -->

  </div>
</form>



</template>
<script>
export default{
    name:'SignupGuest'
}
</script>
<style scoped>
*,
a{
  list-style:none;
  text-decoration:none;

}
form{

width:25vw;
margin:20vh 60vw;
background-color: rgb(255, 255, 255);
padding:2rem;
color:black;
justify-content:space-evenly;
font-weight:600;
line-height:5vh;
border-radius:1.5rem;

}
button{
  background-color: rgb(76, 116, 76);
  color:white;
  width:5vw;
  border-radius:1.5rem;
  margin-top:3vh;
  border-color:rgba(255, 255, 255, 0.161);

}
button:hover{
  background-color:rgb(143, 99, 18);
  transition: 600ms ease-in;
}


</style>