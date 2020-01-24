<template>
    <div class="d-flex flex-column" style="height: 80vh">
        <CreateRoom/>
        <div class="container my-4">
            <div class="d-flex flex-wrap justify-content-center">
                <RoomCard v-for="(room, index) in rooms"
                          :key="index"
                          :data="room"
                          @joinRoom="joinRoom"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CreateRoom from '../components/CreateRoom'
    import RoomCard from '../components/RoomCard'
    import router from "../router";

    export default {
        name: 'Entrance',
        data() {
            return {
                teamList: [],
                roomId: ""
            }
        },
        components: {
            CreateRoom,
            RoomCard
        },
        methods: {
            getRooms() {
                this.$store.dispatch('GET_ROOM_LIST');
            },
            joinRoom(roomId) {
                this.roomId = roomId;
                this.$store.dispatch('GET_TEAM_LIST', this.roomId);
                // this.teamList = this.$store.getters.allPlayerList;
                // if (this.teamList.length < 6) {
                //     // if (this.teamList.indexOf(localStorage.getItem('userName')) < 0) {
                //     this.teamList.push(localStorage.getItem('userName'));
                //     this.$store.dispatch('JOIN_ROOM', {
                //         roomName: this.roomId,
                //         teamList: this.teamList
                //     });
                //     localStorage.setItem("join", "true");
                //     router.push("/lobby")
                //     // } else {
                //     //     console.log("User name already registered")
                //     // }
                // } else {
                //     console.log("you can't join, 6 player max")
                // }
            }
        },
        computed: {
            rooms() {
                return this.$store.getters.ROOM_LIST
            },
            getPlayerList() {
                return this.$store.getters.allPlayerList
            }
        },
        watch: {
            getPlayerList(n, o) {
                this.teamList = n;
                if (this.teamList.length < 6) {
                    if (this.teamList.indexOf(localStorage.getItem('userName')) < 0) {
                        this.teamList.push(localStorage.getItem('userName'));
                        this.$store.dispatch('JOIN_ROOM', {
                            roomName: this.roomId,
                            teamList: this.teamList
                        });
                        localStorage.setItem("join", "true");
                        router.push("/lobby")
                    } else {
                        console.log("User name already registered")
                    }
                } else {
                    console.log("you can't join, 6 player max")
                }
            }
        },
        mounted() {
            this.getRooms();
        }
    }
</script>

<style scoped>

</style>