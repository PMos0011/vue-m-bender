<template>
  <nav class="navbar navbar-expand-md navbar-dark main-color">
    <div class="logo-container col-6 col-sm-3 col-md-2" v-scroll="shrinkNavbar">
      <transition-group name="slide">
        <img src="images/logoTop.webp" class="img-fluid" alt="M-Bender" v-show="showTopLogo" key="top" />
        <img src="images/logoBottom.webp" class="img-fluid" alt="M-Bender" key="bottom"/>
      </transition-group>
    </div>
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
      <ul class="navbar-nav ml-auto">
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
          <div class="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">
              <strong>USŁUGI KSIEGOWE</strong>
            </a>
            <a class="dropdown-item" href="#">
              <strong>ROZLICZENIA PODATKOWE</strong>
            </a>
            <a class="dropdown-item" href="#">
              <strong>USŁUGA KADROWO- PŁACOWA</strong>
            </a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <strong>KONTAKT</strong>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-0 col-md-1"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showTopLogo: true
    };
  },
  methods: {
    shrinkNavbar() {
      if (window.scrollY > 200) {
        this.showTopLogo = false;
      } else {
        this.showTopLogo = true;
      }
    }
  }
};
</script>

<style>
.main-color {
  background-color: #7f778f;
}
.navbar {
  position: fixed;
  width: 100%;
  font-family: Cinzel;
  z-index: 100;
}
.custom-dropdown {
  background-color: #9f9aa9;
  box-shadow: 0px 5px 10px #7f778f;
}
</style>