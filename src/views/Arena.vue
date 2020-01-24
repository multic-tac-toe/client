<template>
    <div class="arena">
        <b-container>
            <b-row>
                <b-col cols-lg="3">
                    <i class="fas fa-times big-icon"></i>
                    <hr/>
                    <div class="players" v-for="player in teamX" :key="player.id">
                        <div class="players-name">
                            {{player}}
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
                    <div class="players" v-for="player in teamO" :key="player.id">
                        <div class="players-name">
                            {{player}}
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
    .players-name {
        width: 50%;
        margin: auto;
        border: 1px solid #51505f;
        margin-bottom: 1rem;
        border-radius: 4px;
    }
</style>
