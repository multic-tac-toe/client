<template>
    <div class="container" style="width: 50vh">
        <div>
            <b-img
                    src="https://i.imgur.com/iSdX1S5.jpg"
                    fluid
                    alt="Player"
                    class="logo w-50 my-4 shadow"
                    rounded="circle"
                    style="transform: rotate(10deg)">
            </b-img>
        </div>
        <b-form @submit.prevent="createUserName">
            <b-form-group
                    id="input-group-1"
                    label="Create New Player"
                    label-for="new-room"
                    class="font-weight-bold">
                <b-form-input
                        id="new-room"
                        type="text"
                        required
                        placeholder="input your name ..."
                        class="rounded"
                        minLength="3"
                        maxLength="12"
                        style="text-align: center"
                        v-model="userName"/>
            </b-form-group>
            <b-button type="submit" variant="primary">Create</b-button>
        </b-form>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: 'CreatePlayer',
        data() {
            return {
                userName: ""
            }
        },
        methods: {
            createUserName() {
                if (this.userName) {
                    if (!localStorage.getItem('userName')) {
                        localStorage.setItem('userName', this.userName);
                    }
                    router.push("/entrance");
                } else {
                    console.log({
                        error: "username minimal 3 character"
                    })
                }
            }
        }
    }
</script>

<style scoped>
    @keyframes animaterotation {
        0% {
            transform: rotate(10deg);
        }
        50% {
            transform: rotate(25deg);
        }
        100% {
            transform: rotate(10deg);
        }
    }

    .logo {
        animation: animaterotation 2s infinite !important;
    }


</style>