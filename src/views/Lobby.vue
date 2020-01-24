<template>
    <div class="container d-flex flex-column">
        <div>
            <b-img
                    @click="runAllRandom"
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
    import router from "../router";

    export default {
        name: 'lobby',
        data() {
            return {}
        },
        methods: {
            runAllRandom() {
                this.randomJoinTeam()
                this.randomInitialTeamTurn()
                this.randomPlayerTurn()
                this.$store.dispatch('UPDATE_GAME_SPEC')
            },
            randomJoinTeam() {
                let teamX = []
                let teamO = []
                const maxPlayerInTeam = Math.ceil(this.allPlayerList.length / 2)

                if (this.allPlayerList.length > 6 || this.allPlayerList.length < 2)
                    console.log(' \n======================\n players must between 2 to 6')
                else {
                    this.allPlayerList.forEach(element => {
                        const randResult = randomGenerator(2)

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
            randomPlayerTurn() {
                let playerStack = [];
                if (this.teamTurn === 'X')
                    playerStack = this.teamX
                else
                    playerStack = this.teamO

                const playerTurn = playerStack[Math.floor(Math.random() * playerStack.length)]
                console.log(`TCL: randomPlayerTurn -> playerTurn`, playerTurn)
            },

            randomInitialTeamTurn() {
                const randTurn = randomGenerator(2)
                if (randTurn === 0)
                    this.$store.commit('SET_TEAM_TURN', 'X')
                else
                    this.$store.commit('SET_TEAM_TURN', 'O')

                console.log(`TCL: randomInitialTeamTurn -> this.teamTurn`, this.teamTurn)
            },
            addPlayers() {
                this.$store.state.allPlayerList = localStorage.getItem('players')
                console.log(localStorage.getItem('players'))
            }
        },
        computed: {
            ...mapGetters([
                'allPlayerList',
                'teamX',
                'teamO',
                'teamTurn',
                'gameReady'
            ])
        },
        mounted() {
            // this.addPlayers()
            this.$store.dispatch('GET_GAME_DATA');
        },
        watch: {
            gameReady(n, o){
                console.log(n,o);
                router.push("/arena")
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