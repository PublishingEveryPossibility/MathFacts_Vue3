<template>
   <footer>
        <div class="container-fluid fixed-bottom my-4" id="footerbar">
            <p class="navbar-brand p-2">&copy; 2023 Play2Learn</p>
            <router-link to="/contact-us"><img src="/assets/PHOTOS/Contact.png" id="Contact"/></router-link>
    <a href="https://instagram.com" class="p-2" ><img src="/assets/PHOTOS/Instagram.png" height="25px" id="Instagram"/></a>
    <a href="https://facebook.com" class="p-2" ><img src="/assets/PHOTOS/Facebook.png" height="30px" id="Facebook"/></a>
    <a href="https://twitter.com" class="p-2" ><img src="/assets/PHOTOS/Twitter.png"  height="30px" id="Twitter"/></a>
        </div>
        <router-view/>
    </footer> 
</template>
<script>
export default{
    name:'FooterBar'
}
</script>
<style scoped>
#footerbar {
    display:flex;
    position:absolute;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width:80vw;
    margin-left:10vw;
}



footer img:hover{
    opacity:40%;
}
#Contact{height:4vh;}
</style>