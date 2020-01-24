<template>
    <div class="arena">
        <b-container>
            <b-row>
                <b-col cols-lg="3">
                    <i class="fas fa-times big-icon"></i>
                    <hr/>
                    <div class="players">
                        <div class="players-name">
                            somebody
                        </div>
                        <div class="players-name">
                            once
                        </div>
                        <div class="players-name">
                            told me
                        </div>
                    </div>
                </b-col>
                <b-col cols-lg="6" cols-sm="12">
                    <div class="BoardComponent-wrapper">
                        <BoardComponent/>
                    </div>
                </b-col>
                <b-col cols-lg="3">
                    <i class="far fa-circle big-icon"></i>
                    <hr/>
                    <div class="players">
                        <div class="players-name">
                            somebody
                        </div>
                        <div class="players-name">
                            once
                        </div>
                        <div class="players-name">
                            told me
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import BoardComponent from '@/components/BoardComponent.vue'
    import randomGenerator from '../config/randomGenerator'
    import {mapGetters} from 'vuex'

    export default {
        name: 'arena',
        components: {
            BoardComponent
        },
        methods: {
            randomPlayerTurn() {
                let playerStack = []
                if (this.teamTurn === 'X')
                    playerStack = this.teamX
                else
                    playerStack = this.teamO

                const playerTurn = playerStack[Math.floor(Math.random() * playerStack.length)]
                console.log(`TCL: randomPlayerTurn -> playerTurn`, playerTurn)
            },
            sendResponse(buttonId) {
                const currentTeamTurn = this.teamTurn
                if (this.gameStat[buttonId])
                    console.log(` \n======================\n GRID ${buttonId} HAS BEEN FILLED`)
                else {
                    if (currentTeamTurn === "X")
                        this.$store.commit('SET_TEAM_TURN', 'O')
                    else
                        this.$store.commit('SET_TEAM_TURN', 'X')

                    console.log(' \n======================\n', currentTeamTurn)
                    this.$store.commit('SET_GAME_STAT', {[buttonId]: currentTeamTurn})
                    console.log(' \n======================\n', this.gameStat)
                }


            }
        },
        computed: {
            ...mapGetters([
                'allPlayerList',
                'teamX',
                'teamO',
                'teamTurn',
                'playerTurn',
                'gameStat'
            ])
        }

    }
</script>
<style scoped>
    .big-icon {
        font-size: 4rem;
    }

    .BoardComponent-wrapper {
        display: flex;
        justify-content: center;
    }
</style>
