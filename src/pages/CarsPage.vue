<template>
  <div class="container">
    <section class="row">
      <div class="col-12 my-2">
        <h1>Cars</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-3 car-card">
        <img :src="car.imgUrl" class="img-fluid" :alt="car.make + ' ' + car.model">
        <div class="car-title">
          <p class="fs-4 mb-1 ms-1">{{ car.make }} {{ car.model }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js'
export default {
  setup() {

    async function getCars() {
      try {
        await carsService.getCars()
      } catch (error) {
        Pop.error(error)
      }
    }


    // NOTE when the page loads!
    onMounted(() => {
      console.log('Page is mounted!');
      getCars()
    })


    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 40vh;
  width: 40vh;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  box-shadow: 2px 3px 10px black;
}

.car-card {
  position: relative;
}

.car-title {
  position: absolute;
  bottom: 0;
  color: white;
  text-shadow: 1px 1px 3px black;
  font-weight: bold;
}
</style>