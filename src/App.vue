<template>
    <div id="app">
        <audio autoplay loop>
            <source src="./assets/bg-theme.mp3" type="audio/mp3">
        </audio>
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link> |-->
        <!--      <router-link to="/arena">Arena</router-link> |-->
        <!--      <router-link to="/entrance">Entrance</router-link> |-->
        <!--      <router-link to="/lobby">Lobby</router-link> |-->
        <!--      <router-link to="/registration">Registration</router-link>-->
        <!--    </div>-->
        <router-view/>
    </div>
</template>

<style>
    body {
        background: url("https://i.imgur.com/iJp7sBd.jpg ") no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
