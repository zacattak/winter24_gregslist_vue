<template>
    <div class="container-fluid">
        <section class="row">
            <div>
                <h1>Houses</h1>
            </div>
        </section>

    </div>
</template>


<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js'
import { housesService } from '../services/HousesService.js'


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

        return {}
    }
}

</script>


<style lang="scss" scoped></style>