<template>
    <router-link to="/MathFacts" class="button p-1">Play!</router-link>
<router-view/>
</template>
<script>
export default{
    name:'BtnMath'
}
</script>
<style scoped>
.button{
    border:5px rgb(255, 208, 0) solid;
    list-style:none;
    text-decoration:none;
    Max-width:5vw;
    color:rgb(219, 58, 58);
    font-weight:600;
}

.button:hover{
background-color:green;
transition: 300ms ease-in;
border-color:rgba(255, 255, 255, 0.379);
color:rgba(199, 199, 32, 0.968);

}
</style>