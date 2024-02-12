<template>
    <div>
        <strong>Time Left: {{ timeLeft }}</strong>
    </div>
</template>
<script>

export default{
    name:'GameTimer',
    props:{
        timeLeft:Number
    }
}

</script>
<style scoped>


</style>