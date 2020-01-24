<template>
  <div class="board-wrapper">
    <div class="square" v-for="index in 9" :key="index.id">
      <div class="xo-picked" :class="objGameState[index]+'-color'" v-if="objGameState[index]">
        <i v-if="objGameState[index]=='x'" class="fas fa-times"></i>
        <i v-if="objGameState[index]=='o'" class="far fa-circle"></i>
      </div>
      <div class="xo" v-if="!objGameState[index]">
        <i v-if="teamTurn=='x'" @click="setGame(index, 'x')" class="fas fa-times"></i>
        <i v-if="teamTurn=='o'" @click="setGame(index, 'o')" class="far fa-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setGame(location, team) {
      if (this.$store.state.playerTurn == localStorage.getItem('playerTurn')) {
        console.log({location, team})
        this.$store.commit('CHANGE_STATE', {location, team})
      } else {
        console.log('gak boleh')
      }
    }
  },
  computed: {
    teamTurn() {
      return this.$store.state.teamTurn
    },
    objGameState() {
      return this.$store.state.objGameState
    }
  }
}
</script>

<style scoped>
.board-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
}
.square {
  height: 100px;
  width: 100px;
  margin: 0 4px 4px 0;
  background-color: #82ccdd;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xo i {
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
.x-color {
  background-color: #dc685a;
}
.o-color {
  background-color: #ecaf4f;
}
</style>