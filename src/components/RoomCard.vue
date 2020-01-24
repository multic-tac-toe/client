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
                teamList: []
            }
        },
        props: {
            data: Object
        },
        methods: {
            joinRoom() {
                this.$emit('joinRoom', this.data.id)
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