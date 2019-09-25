<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <img src="../images/logomini.webp" class="img-fluid col-6 col-sm-3 col-md-2" alt />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <strong>STRONA GŁÓWNA</strong>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <strong>OFERTA</strong>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">USŁUGI KSIEGOWE</a>
            <a class="dropdown-item" href="#">ROZLICZENIA PODATKOWE</a>
            <a class="dropdown-item" href="#">USŁUGA KADROWO- PŁACOWA</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <strong>KONTAKT</strong>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>

<style>
.header {
  background-color: #a09698;
}
.navbar {
  font-family: Cinzel;
}
</style>