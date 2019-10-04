<template>
  <div>
    <div class="offert-content" id="offert-selector">
      <h1>OFERTA</h1>
      <div class="offert row">
        <app-offert-option isCenter="false" myId="left">
          <h2 slot="offert">Usługi Księgowe</h2>
        </app-offert-option>
        <app-offert-option isCenter="true" myId="center">
          <h2 slot="offert">Usługa Kadrowo- płacowa</h2>
        </app-offert-option>
        <app-offert-option isCenter="false" myId="right">
          <h2 slot="offert">Rozliczenia podatkowe</h2>
        </app-offert-option>
      </div>
      <div class="offert-description" id="description-container">
        <transition
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <app-offert-description isCenter="false" key="left" v-if="showLeft">
            <p slot="description-title">Usługi księgowe</p>
            <ul slot="offert-description">
              <li>Prowadzenia ksiąg handlowych (tzw. pełna księgowość)</li>
              <li>Prowadzenia podatkowej księgi przychodów i rozchodów (tzw. mała księgowość)</li>
              <li>Rozliczania ryczałtu ewidencjonowanego</li>
              <li>Prowadzenia rejestrów zakupu i sprzedaży VAT</li>
              <li>Prowadzenia ewidencji środków trwałych i wyposażenia</li>
              <li>Sporządzania sprawozdań finansowych</li>
            </ul>
          </app-offert-description>
          <app-offert-description isCenter="true" key="center" v-if="showCenter">
            <p slot="description-title">Usługa kadrowo- płacowa</p>
            <ul slot="offert-description">
              <li>Prowadzenie pełnej dokumentacji związanej z zatrudnieniem pracowników</li>
              <li>Przygotowanie listy płac</li>
              <li>Sporządzanie umów o pracę, umów zlecenia i o dzieło oraz świadectw pracy, a także dokumentacji związanej z zasiłkami opiekuńczymi, macierzyńskimi czy też chorobowymi i innych zaświadczeń związanych z zatrudnieniem</li>
              <li>Przygotowywanie aneksów do umów bądź też wypowiedzeń</li>
              <li>Rozliczanie umów z pracownikami, w tym także zlecenia oraz o dzieło</li>
              <li>Sporządzanie dokumentacji i rozliczeń z ZUS</li>
              <li>Pomoc przy kontrolach z ZUS i Urzędu Skarbowego</li>
              <li>Sporządzanie obowiązkowych sprawozdań statystycznych i wysyłanie ich do GUS</li>
              <li>Roczne rozliczenia pracowników</li>
              <li>Wyliczanie podatku dochodowego osób zatrudnionych</li>
            </ul>
          </app-offert-description>
          <app-offert-description isCenter="false" key="right" v-if="showRight">
            <p slot="description-title">Rozliczenia podatkowe</p>
            <ul slot="offert-description">
              <li>Podatek od towarów i usług (VAT) – powszechny podatek obrotowy od towarów i usług</li>
              <li>Ryczałt od przychodów ewidencjonowanych – uproszczona forma opodatkowania przedsiębiorstwa</li>
              <li>Podatek dochodowy od osób fizycznych (PIT) – rodzaj podatku bezpośredniego obejmujący dochody uzyskane przez osoby fizyczne</li>
              <li>Podatek dochodowy od osób prawnych (CIT) – podatek bezpośredni odprowadzany od dochodów spółek i osób prawnych</li>
            </ul>
          </app-offert-description>
        </transition>
      </div>
    </div>
    <div>
      <app-paralax-image h="500px" imageSrc="../images/003.webp" class="testowa"></app-paralax-image>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

import OffertOption from "./OffertOption";
import OffertDescription from "./OffertDescription";
import ParalaxImage from "./ParalaxImage";

export default {
  data() {
    return {
      showLeft: false,
      showCenter: false,
      showRight: false,
      currentElemHeight: 0,
      intervalSlide: 0
    };
  },
  methods: {
    slideFunction(elem) {
      clearInterval(this.intervalSlide);
      var elemHeight = elem.offsetHeight;
      var difference = elemHeight - this.currentElemHeight;
      var hop = difference / 80;
      this.intervalSlide = setInterval(() => {
        elem.style.height = this.currentElemHeight + "px";
        this.currentElemHeight += hop;
        $(window).trigger("resize.px.parallax");
        if (hop > 0) {
          if (this.currentElemHeight >= elemHeight)
            clearInterval(this.intervalSlide);
        } else {
          if (this.currentElemHeight <= elemHeight)
            clearInterval(this.intervalSlide);
        }
      }, 5);
    },

    fadeInFunction(elem, done) {
      var opc = 0;
      const interval = setInterval(() => {
        elem.style.opacity = opc;
        opc += 0.05;
        if (opc >= 1) {
          clearInterval(interval);
          elem.style.opacity = 1;
          done();
        }
      }, 40);
    },

    fadeOutFunction(elem, done) {
      var opc = 1;
      const interval = setInterval(() => {
        elem.style.opacity = opc;
        opc -= 0.1;
        if (opc <= 0) {
          clearInterval(interval);
          elem.style.opacity = 0;
          done();
        }
      }, 40);
    },

    changeDescription(myId) {
      if (myId === "left") {
        this.showLeft = !this.showLeft;
        this.showCenter = false;
        this.showRight = false;
      }
      if (myId === "center") {
        this.showLeft = false;
        this.showCenter = !this.showCenter;
        this.showRight = false;
      }
      if (myId === "right") {
        this.showLeft = false;
        this.showCenter = false;
        this.showRight = !this.showRight;
      }
      if (this.showLeft || this.showCenter || this.showRight)
        eventBus.elemScroll("description-container");
      else eventBus.elemScroll("offert-selector");
    },
    beforeEnter(el) {
      var elem = document.getElementById("description-container");
      elem.style.height = "auto";
      elem.style.opacity = 0;
    },
    enter(el, done) {
      var elem = document.getElementById("description-container");
      this.fadeInFunction(elem, done);
      this.slideFunction(elem);
    },
    leave(el, done) {
      var elem = document.getElementById("description-container");
      this.fadeOutFunction(elem, done);
 
    },
    afterLeave(el) {
      var elem = document.getElementById("description-container");
      elem.style.height = "0px";
      this.slideFunction(elem);
    }
  },
  components: {
    appOffertOption: OffertOption,
    appOffertDescription: OffertDescription,
    appParalaxImage: ParalaxImage
  },
  created() {
    eventBus.$on("getMyId", myID => {
      this.changeDescription(myID);
    });
  }
};
</script>

<style scoped>
.offert-content {
  text-align: center;
  margin: auto;
  margin-top: 40px;
  max-width: 1100px;
}
.offert {
  padding: 3%;
}
.offert-description {
  font-size: 20px;
  margin: auto;
  text-align: left;
  width: 90%;
  margin-bottom: 30px;
}

h2 {
  font-size: 36px;
  color: whitesmoke;
  font-family: georgia, serif;
  padding-top: 40px;
}

h1 {
  font-size: 48px;
  color: #4d4b4b;
  font-family: "Anton", sans-serif;
}
.row {
  margin: 0px;
}
</style>
