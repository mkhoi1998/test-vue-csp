<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/img-src">Img</router-link> |
      <router-link to="/script-src">Script</router-link> |
      <router-link to="/connect-src">Connect</router-link> |
      <router-link to="/frame-src">Frame</router-link> |
      <router-link to="/manifest-src">Manifest</router-link> |
      <router-link to="/media-src">Media</router-link> |
      <router-link to="/style-src">Style</router-link>
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
</style>
