<template>
        <nav class="navbar fixed-top navbar-expand-lg" id="navtings" >
        <div class="container-fluid">
            <button type="button" class="navbar-toggle m-4" data-bs-toggle="collapse" >
                <span class="navbar-toggler-icon" disabled ></span>
            </button>
            <ul class="text-center p-4">
            <li><h3 class="navbar-brand" id="logo">Play2Learn Logo</h3></li>
           <router-link to="/Home" class="nav-item p-4 ms-4">Home</router-link>
          <div class="dropdown">
            <router-link to="" class="dropbtn nav-item p-4">Games</router-link>
            <div class="dropdown-content">
                <router-link to="/AnagramHunt" class="nav-item games">Anagram Hunt</router-link>
                <router-link to="/MathFacts" class="nav-item games">Math Facts</router-link>
          
            </div>   
        </div>
        <router-link to ="/AboutPage">About</router-link>
        <router-link to="/LoginGuest" id="otherLog" class="nav-item p-4">Login</router-link>
        </ul>
        </div>
    </nav>
    <router-view/>
</template>
<script>
export default{
    name:'NavBar'
}
</script>
<style scoped>


*{ 
    letter-spacing:.1rem;
    font-variant:small-caps;
    display:block;
    font-size:large;
    list-style:none;
    align-items:center;
    opacity:85%;
}
a,
ul{
    text-decoration:none;
    list-style: none;
    color:rgb(87, 27, 226);
    font-weight:600;
 
}

#navtings ul{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}

#navtings li:hover{
    opacity:100%;
    color:rgb(255, 127, 8);
}

.dropdown-content{
    display:none;
    position:absolute;
    z-index:1;
}

.dropdown:hover .dropdown-content{
    display:block;
    
}
.games:hover{
    border:6px solid yellow;
    transition:380ms ease-in;
    background-color: beige;
    color:black;
    font-weight:600;
}
#navtings{
    background-color:rgba(92, 132, 34, 0.49);
    height:20%;
  
}

</style>