<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>showTime</h1><br>
    {{showTime}}

    <h1>showTimeOut</h1><br>
    <!-- {{showTimeOut}} -->

    <h1>dateNow</h1><br>
    {{ dateNow}}<br>

    <h1>timeOut</h1><br>
    {{ timeOut }}

    <button @click="timeOut.setSeconds(timeOut.getSeconds() + 5)">plus 5+</button>
  </div>
</template>


<script>
export default {
    data(){
      return{
        dateNow:'',
        timeOut: new Date('January 24, 2020 12:57:00'),
      }
    },
    methods:{

    },
    computed:{
        showTime(){
          setInterval(() => {
              let hours = new Date().getHours()
              let minutes = new Date().getMinutes()
              let seconds = new Date().getSeconds()
              this.dateNow = `${hours} : ${minutes} : ${seconds}`
              
          }, 1000);
        },
        showTimeOut(){
            setInterval(() => {
              let runningDate = new Date()
              if(  new Date() > this.timeOut )
                alert('game over')
              
          }, 1000);
        }
    }





}
</script>

<style>

</style>