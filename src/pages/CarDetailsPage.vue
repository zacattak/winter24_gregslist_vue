<template>
  <h1>Car details!</h1>
</template>


<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';

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

    return {}
  }
}
</script>


<style lang="scss" scoped></style>