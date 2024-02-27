<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1 class="my-3">Car Details</h1>
      </div>
    </section>

    <section v-if="car" class="row">
      <div class="col-12">
        <h2> {{ car.year }} {{ car.make }} {{ car.model }}</h2>
        <img :src="car.imgUrl" :alt="car.make + ' ' + car.model">
        <p>{{ car.description }}</p>
        <p>Listed by {{ car.creator.name }}</p>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js'
export default {
  setup() {

    const route = useRoute()

    async function getCarById() {
      try {
        const carId = route.params.carId
        await carsService.getCarById(carId)
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      // logger.log('Mounted car details page!');
      // logger.log('Route information', route)
      // logger.log('Id from route', route.params.carId)
      getCarById()
    })

    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  max-height: 40vh;
}
</style>