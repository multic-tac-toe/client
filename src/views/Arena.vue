<template>
  <div class="arena">
    <b-container>
      <b-row>
        <b-col cols-lg="3">
          <i class="fas fa-times big-icon"></i>
          <hr />
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
            <BoardComponent />
          </div>
        </b-col>
        <b-col cols-lg="3">
          <i class="far fa-circle big-icon"></i>
          <hr />
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

export default {
  name: 'arena',
  components: {
    BoardComponent
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
