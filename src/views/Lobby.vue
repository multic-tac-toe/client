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
    <b-list-group class="w-50 mx-auto">
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Morbi leo risus</b-list-group-item>
      <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
      <b-list-group-item>Esteban Cambiaso</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.3,1.3);
    }
    100% {
        transform: scale(1,1);
    }
}

.play-btn {
	animation: zoominoutsinglefeatured 2s infinite !important;
}

</style>