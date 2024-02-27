<template>
  <div class="container">
    <section class="row">
      <div class="col-12 my-2">
        <h1>Cars</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4">
        {{ car.make }} {{ car.model }}
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


<style lang="scss" scoped></style>