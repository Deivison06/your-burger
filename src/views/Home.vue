<template>
<div>
    <Banner /> 
    <div class="main-container">
      <h1>BUILD YOUR BURGER</h1>
      <BurgeForm />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgeForm from '../components/Formulario.vue'
export default {
  name: "Home",
  components: {
    Banner,
    BurgeForm
  }
}
</script>
