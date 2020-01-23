<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click.prevent="randomJoinTeam">randomJoinTeam</button>
    <button @click.prevent="randomInitialTeamTurn">randomInitialTeamTurn</button>
    <button @click.prevent="randomPlayerTurn">randomPlayerTurn</button>
    <button @click.prevent="runAllRandom">runAllRandom</button>

    <div>
        <h1>test button coordinate</h1>
        <button v-for="x in 9" :key="x"
          @click.prevent="sendResponse(x)">{{x}}
        </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
      randomGenerator(permutations){
          return Math.floor(Math.random() * permutations )
      },
      randomJoinTeam(){
          let teamX = []
          let teamO = []
          const maxPlayerInTeam = Math.ceil(this.allPlayerList.length/2)

          if(this.allPlayerList.length > 6 || this.allPlayerList.length < 2)
                console.log(' \n======================\n players must between 2 to 6')
          else
            {
                this.allPlayerList.forEach(element => {
                      const randResult = this.randomGenerator(2)

                      if(randResult === 0 && teamX.length < maxPlayerInTeam )
                          teamX.push(element)
                      else if(teamO.length < maxPlayerInTeam )
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
      randomInitialTeamTurn(){
          const randTurn = this.randomGenerator(2)
          if( randTurn === 0)
            this.$store.commit('SET_TEAM_TURN', 'X')
          else
            this.$store.commit('SET_TEAM_TURN', 'O')
          
          console.log(`TCL: randomInitialTeamTurn -> this.teamTurn`, this.teamTurn)
      },
      randomPlayerTurn(){
          let playerStack = []
          if(this.teamTurn === 'X')
            playerStack = this.teamX
          else
            playerStack = this.teamO

          const playerTurn = playerStack[ Math.floor(Math.random() * playerStack.length)]
          console.log(`TCL: randomPlayerTurn -> playerTurn`, playerTurn)
      },
      runAllRandom(){
          this.randomJoinTeam()
          this.randomInitialTeamTurn()
          this.randomPlayerTurn()
      },
      sendResponse(buttonId){
          const currentTeamTurn = this.teamTurn
          if(this.gameStat[buttonId])
            console.log(` \n======================\n GRID ${buttonId} HAS BEEN FILLED`)
          else
            {
                if(currentTeamTurn === "X")
                    this.$store.commit('SET_TEAM_TURN', 'O')
                else
                    this.$store.commit('SET_TEAM_TURN', 'X')

                console.log(' \n======================\n', currentTeamTurn)
                this.$store.commit('SET_GAME_STAT', { [buttonId] : currentTeamTurn })
                console.log(' \n======================\n', this.gameStat)
            }
          

      }
  },
  computed:{
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
