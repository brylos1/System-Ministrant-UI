<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="/kokpit">Ministrant</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
          <router-link class="nav-link" to="/kokpit" active-class="active" aria-current="page" href="#" v-if="logined">Kokpit</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ministrant
          </a>
          <ul class="dropdown-menu dropdown-menu-dark bg-dark" aria-labelledby="navbarDropdown">
            <li >
          <router-link class="dropdown-item" to="/dyzury" active-class="active" aria-current="page" href="#" v-if="logined">Dyzury</router-link>
        </li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active" aria-current="page" href="#" v-if="!logined">Logowanie</router-link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default{
  data(){
    return{
      logined: true
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #333333;
  min-height: 100vh;
  word-wrap: break-word;
  box-sizing: border-box;
  padding-bottom: 3em;
}

nav {
  padding: 30px;
}

nav a, a.navbar-brand{
  font-weight: bold;
  color: #ffffff;
}

nav .navbar-nav .nav-link.active,nav .dropdown-item.active,nav .dropdown-item:active  {
  color: #F73D93;
  background-color: transparent;
}
</style>
