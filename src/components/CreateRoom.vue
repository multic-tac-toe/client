<template>
  <div class="container" style="width: 50vh">
    <div>
      <b-img
        src="https://miro.medium.com/max/512/1*9LBDOx6gG4mTuPGPDp888w.png"
        fluid
        alt="Tic Tac Toe"
        class="w-50 my-4 shadow"
        rounded="circle"
        style="transform: rotate(10deg)">
      </b-img>
    </div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Create New Room"
        label-for="new-room"
        class="font-weight-bold"
      >
        <b-form-input
          id="new-room"
          type="text"
          required
          placeholder=""
          class="rounded"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Create</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CreateRoom'
}
</script>

<style>

</style>