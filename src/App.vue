<template>
  <div id="app">
    <TodosPage/>
  </div>
</template>

<script>
import TodosPage from './components/TodosPage.vue'

export default {
  name: 'App',
  components: {
    TodosPage
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 100px auto;
}
</style>
