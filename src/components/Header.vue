<template>
  <div id="navbar-selector">
    <nav
      class="navbar navbar-expand-md navbar-dark main-color"
      data-toggle="tab"
      id="navbar-element"
    >
      <div class="logo-container col-6 col-sm-3 col-md-2" v-scroll="shrinkNavbar">
        <transition-group name="slide">
          <img
            src="images/logoTop.webp"
            class="img-fluid navbar-image"
            alt="M-Bender"
            v-show="showTopLogo"
            key="top"
            @click="scrollTo('navbar-selector')"
          />
          <img
            src="images/logoBottom.webp"
            class="img-fluid navbar-image"
            alt="M-Bender"
            key="bottom"
            @click="scrollTo('navbar-selector')"
          />
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
            <router-link to="/" class="nav-link" v-on:click.native="scrollTo('navbar-selector')">
              <strong>STRONA GŁÓWNA</strong>
            </router-link>
          </li>
          <li class="nav-item dropdown" @mouseenter="dropIn" @mouseleave="dropOut">
            <router-link to="/" class="nav-link dropdown-toggle" v-on:click.native="scrollTo('offert-selector')">
              <strong>OFERTA</strong>
            </router-link>
            <div class="dropdown-menu custom-dropdown" id="drop">
              <router-link to="/" class="dropdown-item" v-on:click.native="sendID('left')">
                <strong>USŁUGI KSIĘGOWE</strong>
              </router-link>
              <router-link to="/" class="dropdown-item" v-on:click.native="sendID('center')">
                <strong>ROZLICZENIA PODATKOWE</strong>
              </router-link>
              <router-link to="/" class="dropdown-item" v-on:click.native="sendID('right')">
                <strong>USŁUGA KADROWO- PŁACOWA</strong>
              </router-link>
            </div>
          </li>
           <li class="nav-item">
            <router-link to="/valuation" class="nav-link" v-on:click.native="scrollTo('valuation-selector')">
              <strong>ZAPYAJ O CENĘ</strong>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" v-on:click.native="scrollTo('footer-selector')">
              <strong>KONTAKT</strong>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-0 col-md-1"></div>
    </nav>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      showTopLogo: true,
      opc: 0,
      interval: 0
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
    dropIn() {
      if (this.opc == 0) {
        var elem = document.getElementById("drop");
        elem.style.display = "block";
        var elemOffset = elem.offsetTop;
        elem.style.top = elemOffset - 5 + "px";
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
    dropOut() {
      clearInterval(this.interval);
      var elem = document.getElementById("drop");
      this.opc = elem.style.opacity;
      const interval = setInterval(() => {
        this.opc -= 0.08;
        elem.style.opacity = this.opc;
        if (this.opc <= 0) {
          clearInterval(interval);
          elem.style.top = "auto";
          elem.style.display = "none";
          elem.style.opacity = 0;
          this.opc = 0;
        }
      }, 20);
    },
    scrollTo(id) {
      this.dropOut();
      eventBus.elemScroll(id);
    },
    sendID(id) {
      this.dropOut();
      eventBus.sendMyId(id);
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
.navbar-image {
  cursor: pointer;
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