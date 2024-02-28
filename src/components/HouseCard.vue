<template>
    <img src="houseProp.imgUrl" class="img-fluid" alt="house">
</template>


<script>
import { computed } from 'vue';
import { House } from '../models/House';
import { Car } from '../models/Car';




export default {
    props: {
        houseProp: { type: House, required: true }
    },


    setup() {
        return {

        }
    }
}
</script>


<style lang="scss" scoped></style>