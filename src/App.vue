<template>
  <div id="app">
    <NewDesign/>
  </div>
</template>

<script>
import NewDesign from './components/NewDesign.vue'

export default {
  name: 'App',
  components: {
    NewDesign
  }
}
</script>

<style>
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans'), local('OpenSans'), url('http://themes.googleusercontent.com/static/fonts/opensans/v5/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff') format('woff');
}

#app {
  font-family: 'open sans',arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 100px auto;
}
</style>
