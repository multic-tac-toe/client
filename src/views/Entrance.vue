<template>
    <div class="d-flex flex-column" style="height: 80vh">
        <CreateRoom/>
        <div class="container my-4">
            <div class="d-flex flex-wrap justify-content-center">
                <RoomCard v-for="(room, index) in rooms" :key="index" :data="room"/>
            </div>
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
        },
        methods: {
            getRooms() {
                this.$store.dispatch('GET_ROOM_LIST');
            }
        },
        computed: {
            rooms(){
                return this.$store.getters.ROOM_LIST
            }
        },
        mounted() {
          this.getRooms();
        }
    }
</script>

<style scoped>

</style>