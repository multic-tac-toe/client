<template>
  <div class="d-flex flex-column" style="height: 80vh">
    <CreateRoom></CreateRoom>
    <div class="container my-4">
      <b-card-group deck>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import CreateRoom from '../components/CreateRoom'
import RoomCard from '../components/RoomCard'
export default {
  name: 'Entrance',
  components: {
    CreateRoom,
    RoomCard
  }
}
</script>

<style scoped>

</style>