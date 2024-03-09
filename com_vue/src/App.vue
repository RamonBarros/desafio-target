<template>
  <div class="main">
    <div id="nav">
      <router-link to="/">Questão 1</router-link> |
      <router-link to="/inversor-de-strings">Questão 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
  width: 100%;
}
</style>
