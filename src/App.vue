<template>
  <div id="app">
    <header>
      <h1>
        vue voxer</h1>
        <p>Realtime Voice Chat</p>
        
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import {auth, storage, db}from './firebase'
console.log(auth, storage, db)

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
