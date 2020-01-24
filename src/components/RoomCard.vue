<template>
    <b-card bg-variant="ligth" text-variant="dark" :header="data.id" class="room-card m-4" style="min-width: 300px">
        <button type="button" class="btn btn-outline-dark">Join Room</button>
    </b-card>
</template>

<script>
    export default {
        name: 'RoomCard',
        props: {
            data: Object
        }
    }
</script>

<style scoped>
    @keyframes zoominoutsinglefeatured {
        0% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.05, 1.05);
        }
        100% {
            transform: scale(1, 1);
        }
    }

    .room-card {
        animation: zoominoutsinglefeatured 2s infinite !important;
    }
</style>