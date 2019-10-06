<template>
  <div class="footer" id="footer-selector">
    <div class="footer-content">
      <h1>KONTAKT</h1>
    </div>
    <div class="footer-content row justify-content-between">
      <div class="contact col-md-5">
        <p class="black-text">Adres</p>
        <p class="white-text">
          ul. Królewiecka 45
          <br />54-109 Wrocław
        </p>
        <p class="black-text">E-mail</p>
        <a class="white-text" href="mailto:ksiegowosc@m-bender.pl">ksiegowosc@m-bender.pl</a>
        <br />
        <br />
        <p class="black-text">Telefon</p>
        <p class="white-text">531 405 500</p>
        <div class="row logo-margin">
          <a
            href="https://www.facebook.com/MB-Biuro-Us%C5%82ug-Ksi%C4%99gowych-2144983182199156/"
            target="_blank"
          >
            <img src="images/fb.webp" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/mb.biuro.uslug.ksiegowych/" target="_blank">
            <img src="images/instagram.webp" alt="Instagram" />
          </a>
        </div>
      </div>
      <div class="e-mail col-md-6">
        <form id="mail-sender" @submit="sendEmail">
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            class="form-control"
            onclick="this.select()"
            required
          />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="form-control"
            onclick="this.select()"
            required
          />
          <br />
          <textarea
            name="message"
            id="message"
            v-model="message"
            cols="30"
            rows="5"
            class="col-12"
            onclick="this.select()"
            required
          ></textarea>
          <button type="submit" class="btn btn-secondary">Wyślij</button>
        </form>
        <div id="response">{{response}}</div>
      </div>
    </div>
    <footer>
      <cookie-law 
      message="Ta strona wykorzystuje pliki cookies aby zapewnić najlepszą jakość korzystania z naszej witryny"
      theme="blood-orange--rounded"
      buttonText="Ok"></cookie-law>
    </footer>
  </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";
export default {
  data() {
    return {
      name: "imię",
      email: "e-mail",
      message: "wiadomość",
      response: ""
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      var contactForm = this;
      this.axios
        .post("https://m-bender.pl/php/mailer_new.php", {
          contact_name: this.name,
          contact_email: this.email,
          message: this.message
        })
        .then(response => {
          contactForm.response = response.data;
        })
        .catch(error => {
          contactForm.response = "Coś poszło nie tak. Spróbuj ponownie później";
          console.log(error);
        });
    }
  },
  components: { CookieLaw }
};
</script>

<style scoped>
.footer {
  background-color: #cdcbd1;
  padding-bottom: 50px;
  font-family: "Cinzel", sans-serif;
  font-weight: bold;
}
.footer-content {
  width: 60%;
  margin: auto;
  min-width: 380px;
}
h1 {
  padding-top: 70px;
  font-size: 50px;
  color: whitesmoke;
  padding-bottom: 50px;
}
.black-text {
  color: #4b4244;
  font-size: 22px;
}
.white-text {
  color: white;
  margin-bottom: 30px;
}
.logo-margin {
  margin-bottom: 30px;
}
</style>
