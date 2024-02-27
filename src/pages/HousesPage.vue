<template>
    <div class="container">
        <section class="row">
            <div class="col-12">
                <h1>Houses</h1>
            </div>
        </section>
        <section class="row">
            <div v-for="house in houses" :key="house.id" class="col-md-4">

                <img :src="house.imgUrl" class="img-fluid" :alt="house.description + house.price">
                {{ house.description }} {{ house.price }}, {{ house.year }}

            </div>

        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js'
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState.js'


export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            console.log('Page is mounted!');
            getHouses()
        })

        return {
            houses: computed(() => AppState.houses)
        }
    }
}

</script>


<style lang="scss" scoped></style>