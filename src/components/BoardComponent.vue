<template>
  <div class="board-wrapper">
    <div class="square" v-for="index in 9" :key="index.id">
      <div class="xo-picked" :class="gameStat[index]+'-color'" v-if="gameStat[index]">
        <i v-if="gameStat[index]=='X'" class="fas fa-times"></i>
        <i v-if="gameStat[index]=='O'" class="far fa-circle"></i>
      </div>
      <div class="xo" v-if="!gameStat[index]">
        <i v-if="teamTurn=='X'" @click="sendResponse(index)" class="fas fa-times"></i>
        <i v-if="teamTurn=='O'" @click="sendResponse(index)" class="far fa-circle"></i>
      </div>
    </div>
    <div class="player-turn mt-5">
      <h4>Player Turn</h4>
      <h3>{{playerTurn}}</h3>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  methods: {
    randomPlayerTurn() {
        let playerStack = []
        if (this.teamTurn === 'X')
            playerStack = this.teamX
        else
            playerStack = this.teamO

        const playerTurn = playerStack[Math.floor(Math.random() * playerStack.length)]
        this.$store.commit('SET_PLAYER_TURN', playerTurn)
        console.log(`TCL: randomPlayerTurn -> playerTurn`, playerTurn)
    },
    sendResponse(buttonId) {
        const currentTeamTurn = this.teamTurn
        if (this.$store.state.playerTurn == localStorage.getItem('player')) { 
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
          this.randomPlayerTurn()
          this.$store.dispatch('UPDATE_GAME')
          console.log(this.gameStat, this.teamTurn, this.playerTurn)
        } else {
          console.log('gak boleh')
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
.player-turn {
  width: 360px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.board-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
}
.square {
  height: 112px;
  width: 112px;
  margin: 0 8px 8px 0;
  background-color: #82ccdd;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xo i {
  display: block;
  opacity: 0;
  font-size: 60px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  z-index: 2;
}
.xo-picked i {
  font-size: 60px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  z-index: 2;
}
.xo, .xo-picked {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  color: #fff;
}
.xo:hover {
  background-color: #51505f;
  transition: all 0.4s ease-in;
}
.xo:hover > i {
  opacity: 1;
  color: #b6b5ca;
  transition: all 0.4s ease-in;
}
.X-color {
  background-color: #dc685a;
}
.O-color {
  background-color: #ecaf4f;
}
</style>