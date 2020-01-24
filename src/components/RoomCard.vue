<template>
    <b-card bg-variant="ligth"
            text-variant="dark"
            :header="data.id"
            class="room-card m-4"
            style="min-width: 300px">
        <button type="button"
                class="btn btn-outline-dark"
                @click="joinRoom">
            Join Room
        </button>
    </b-card>
</template>

<script>
    import router from "../router";

    export default {
        name: 'RoomCard',
        data() {
            return {
                teamList: ""
            }
        },
        props: {
            data: Object
        },
        methods: {
            joinRoom() {
                this.$store.dispatch('GET_TEAM_LIST', this.data.id);
                this.teamList = this.$store.getters.allPlayerList;
                if (this.teamList.length < 6) {
                    if (this.teamList.indexOf(localStorage.getItem('userName')) < 0) {
                        this.teamList.push(localStorage.getItem('userName'));
                        this.$store.dispatch('JOIN_ROOM', {
                            roomName: this.data.id,
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