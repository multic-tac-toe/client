<template>
  <b-card bg-variant="ligth" text-variant="dark" header="Room Name" class="room-card text-center">
    <button type="button" class="btn btn-outline-dark">Join Room</button>
  </b-card>
</template>

<script>
export default {
  name: 'RoomCard'
}
</script>

<style scoped>
@keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.05,1.05);
    }
    100% {
        transform: scale(1,1);
    }
}

.room-card {
	animation: zoominoutsinglefeatured 2s infinite !important;
}
</style>