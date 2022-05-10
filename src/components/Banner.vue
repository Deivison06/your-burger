<template>
    <div id="main-banner">
        <h1>Your Burger</h1>
    </div>
  
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
    #main-banner {
    background-image: url('/public/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  #main-banner h1 {
    color: rgba(233, 233, 233, 0.856);
    text-align: center;
    font-size: 60px;
    background-color: rgba(34, 34, 34, 0.623);
    padding: 20px 40px;
  }
    
</style>

