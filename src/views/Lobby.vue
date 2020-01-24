<template>
    <div class="container d-flex flex-column">
        <div>
            <b-img
                    src="https://i.imgur.com/9yyfubL.jpg"
                    fluid
                    alt="Play Button"
                    class="play-btn my-4"
                    style="width: 25%">
            </b-img>
        </div>
        <h3>Our Athletes:</h3>
        <b-list-group class="w-50 mx-auto" v-for="(player, index) in allPlayerList" :key="index">
            <b-list-group-item>{{player}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import randomGenerator from '../config/randomGenerator'
    import {mapGetters} from 'vuex'

    export default {
        name: 'lobby',
        data() {
            return {}
        },
        methods: {
            randomJoinTeam() {
                let teamX = []
                let teamO = []
                const maxPlayerInTeam = Math.ceil(this.allPlayerList.length / 2)

                if (this.allPlayerList.length > 6 || this.allPlayerList.length < 2)
                    console.log(' \n======================\n players must between 2 to 6')
                else {
                    this.allPlayerList.forEach(element => {
                        const randResult = this.randomGenerator(2)

                        if (randResult === 0 && teamX.length < maxPlayerInTeam)
                            teamX.push(element)
                        else if (teamO.length < maxPlayerInTeam)
                            teamO.push(element)
                        else
                            teamX.push(element)
                    });

                    this.$store.commit('SET_TEAM_X', teamX)
                    this.$store.commit('SET_TEAM_O', teamO)

                    console.log(`TCL: randomJoinTeam -> this.teamX`, this.teamX)
                    console.log(`TCL: randomJoinTeam -> this.teamO`, this.teamO)
                }
            },
            randomInitialTeamTurn() {
                const randTurn = this.randomGenerator(2)
                if (randTurn === 0)
                    this.$store.commit('SET_TEAM_TURN', 'X')
                else
                    this.$store.commit('SET_TEAM_TURN', 'O')

                console.log(`TCL: randomInitialTeamTurn -> this.teamTurn`, this.teamTurn)
            },
        },
        computed: {
            ...mapGetters([
                'allPlayerList',
                'teamX',
                'teamO',
                'teamTurn',
            ])
        }


    }
</script>

<style scoped>
    @keyframes zoominoutsinglefeatured {
        0% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.3, 1.3);
        }
        100% {
            transform: scale(1, 1);
        }
    }

    .play-btn {
        animation: zoominoutsinglefeatured 2s infinite !important;
    }

</style>