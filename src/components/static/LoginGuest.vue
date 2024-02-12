<template>
<form class="p-4">
<div id="Login">
  <h3>Login</h3>
 <label for="email">Email:</label> 
 <input class="p-1 m-1 form-control" placeholder="Email" id="email" type="text"/>
 <label for="password">Password:</label>
 <input class="p-1 m-1 form-control" placeholder="*******" type="password" id="password"/>
<button class="button p-2 m-4" @onclick="alertSubmit($event)">Login</button>
<!--Alert that the Form was submitted-->
<router-link to ="/SignupGuest" class="button p-1">Need an account? Register.</router-link>
</div>
</form>


</template>
<script>
export default{
    name:'LoginGuest'
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
color:black;
justify-content:space-evenly;
font-weight:600;
border-radius:1.5rem;

}

button{
  display:block;
  background-color: rgb(76, 116, 76);
  color:white;
  border-color:rgba(255, 255, 255, 0.161);
  border-radius:1.5rem;
  width:5vw;
  opacity:85%;

  

}
button:hover{
  background-color:rgb(143, 99, 18);
  transition: 600ms ease-in;
}
</style>