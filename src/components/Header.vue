<template>
  <nav class="navbar navbar-expand-md navbar-dark main-color">
    <div class="logo-container col-6 col-sm-3 col-md-2" v-scroll="shrinkNavbar">
      <transition-group name="slide">
        <img
          src="images/logoTop.webp"
          class="img-fluid"
          alt="M-Bender"
          v-show="showTopLogo"
          key="top"
        />
        <img src="images/logoBottom.webp" class="img-fluid" alt="M-Bender" key="bottom" />
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
        <li class="nav-item dropdown" @mouseenter="dropOut" @mouseleave="dropIn">
          <a class="nav-link dropdown-toggle" href="#">
            <strong>OFERTA</strong>
          </a>
          <div class="dropdown-menu custom-dropdown" id="drop">
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
      showTopLogo: true,
      opc: 0,
      interval: 0,
      elemOffset: 0
    };
  },
  methods: {
    shrinkNavbar() {
      if (window.scrollY > 100) {
        this.showTopLogo = false;
      } else {
        this.showTopLogo = true;
      }
    },
    dropOut() {
      if (this.opc == 0) {
        var elem = document.getElementById("drop");
        elem.style.display = "block";
        this.elemOffset = elem.offsetTop;
        elem.style.top = this.elemOffset - 5 + "px";
        elem.style.opacity = 0;
        this.interval = setInterval(() => {
          elem.style.opacity = this.opc;
          this.opc += 0.08;
          if (this.opc >= 1) {
            clearInterval(this.interval);
            elem.style.opacity = 1;
          }
        }, 20);
      }
    },
    dropIn() {
      clearInterval(this.interval);
      var elem = document.getElementById("drop");
      this.opc = elem.style.opacity;
      const interval = setInterval(() => {
        this.opc -= 0.08;
        elem.style.opacity = this.opc;
        if (this.opc <= 0) {
          clearInterval(interval);
          elem.style.top = this.elemOffset - 2 + "px";
          elem.style.display = "none";
          elem.style.opacity = 0;
          this.opc = 0;
        }
      }, 20);
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

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
}

.slide-move {
  animation: slide-in 0.5s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-1rem);
    opacity: 0;
  }
}
</style>