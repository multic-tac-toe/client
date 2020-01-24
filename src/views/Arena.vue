<template>
    <div class="arena">

        <div v-if="winner" class="winner-overlay">
            <h1>{{winner}}</h1>
            <img v-if="winner!='DRAW'" src="@/assets/win.gif" alt="">
            <img v-if="winner=='DRAW'" src="@/assets/draw.gif" alt="" srcset="">
            <button @click.prevent="close">Close</button>
            <audio v-if="winner!='DRAW'" autoplay>
                <source src="@/assets/win.mp3" type="audio/mp3">
            </audio>
            <audio v-if="winner=='DRAW'" autoplay>
                <source src="@/assets/draw.mp3" type="audio/mp3">
            </audio>
        </div>

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
    import router from "../router";

    export default {
        name: 'arena',
        components: {
            BoardComponent
        },
        methods: {
            close(){
                localStorage.clear();
                router.push("/")
            }
        },
        computed: {
            ...mapGetters([
                'allPlayerList',
                'teamX',
                'teamO',
                'teamTurn',
                'playerTurn',
                'gameStat',
                'winner'
            ])
        }

    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Titan+One&display=swap');

    .arena {
        margin-top: 4rem;
    }

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

    .winner-overlay {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 100;
        color: #fff;
        font-family: 'Titan One', cursive;
    }
</style>
