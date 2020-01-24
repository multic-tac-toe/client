<template>
    <div class="container" style="width: 50vh">
        <div>
            <b-img
                    src="https://miro.medium.com/max/512/1*9LBDOx6gG4mTuPGPDp888w.png"
                    fluid
                    alt="Tic Tac Toe"
                    class="w-50 my-4 shadow"
                    rounded="circle"
                    style="transform: rotate(10deg)">
            </b-img>
        </div>
        <b-form @submit.prevent="createRoom">
            <b-form-group
                    id="input-group-1"
                    label="Create New Room"
                    label-for="new-room"
                    class="font-weight-bold">
                <b-form-input
                        id="new-room"
                        type="text"
                        required
                        placeholder="input room name ..."
                        class="rounded"
                        v-model="roomName"
                        minLength="3"
                        maxLength="12"
                        style="text-align: center"
                        required/>
            </b-form-group>
            <b-button type="submit" variant="primary">Create</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'CreateRoom',
        data() {
            return {
                roomName: ""
            }
        },
        methods: {
            createRoom() {
                if (this.roomName) {
                    this.$store.dispatch('CREATE_ROOM', this.roomName)
                }
            }
        }
    }
</script>

<style>

</style>