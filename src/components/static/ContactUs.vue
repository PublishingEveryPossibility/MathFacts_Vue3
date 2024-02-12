<template>
    <div class="container-fluid">
        <h3> Contact Us</h3>
        <form class="text-center align-items-center">
            <label for="email" placeholder="Email" class="px-2">Email:</label>
            <input type="text" id="email" class="form-control"/>
            <label for="subject" class="px-2">Subject</label>
            <input type="textbox" id="subject" class="form-control"/>
            <label for="message" class="px-2">Message</label>
            <input type="text" id="message" class="form-control p-4"/>

        </form>



    </div>
</template>
<script>

export default{
    name:'ContactUs'
}



</script>
<style scoped>

*{
    margin-top:10vh;
    width:60%;
    padding-left:2rem;
    overflow:hidden;
}

</style>