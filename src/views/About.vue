<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>showTime</h1><br>
    {{showTime}}


    <h1>dateNow</h1><br>
    {{ dateNow}}<br>
<br><br>
    <h1>timeOut</h1><br>
    {{ timeOut }}
<br><br>
    <h1>seconds left</h1>
    <h1>{{ secondsLeft }}</h1>

    <button @click="timeout = timeOut.setSeconds(timeOut.getSeconds() + 5)">plus 5+</button>
  </div>
</template>


<script>
export default {
    data(){
      return{
        dateNow:'',
        timeOut: new Date('January 24, 2020 13:25:00'),
        secondsLeft : ''
      }
    },
    methods:{
        addTimeOut(){
            this.timeOut = new Date().setSeconds( new Date().getSeconds() + 5)
        }
    },
    computed:{
        showTime(){
          setInterval(() => {
              this.dateNow = new Date()
              this.secondsLeft = Math.floor( (this.timeOut.getTime() - this.dateNow.getTime()) / 1000)
              
              if( this.dateNow >= this.timeOut)
                  alert('game over')
          }, 1000);
        }
    }





}
</script>

<style>

</style>