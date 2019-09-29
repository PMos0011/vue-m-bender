<template>
  <div class="footer">
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
        <p class="white-text">ksiegowosc@m-bender.pl</p>
        <p class="black-text">Telefon</p>
        <p class="white-text">531 405 500</p>
        <div class="row logo-margin">
          <img src="images/fb.webp" alt="Facebook" />
          <img src="images/instagram.webp" alt="Instagram" />
        </div>
      </div>
      <div class="e-mail col-md-6">
        <div class="form-group">
          <input type="text" id="name" class="form-control" value="imię" onclick="this.select()" />
          <br />
          <input type="text" id="email" class="form-control" value="e-mail" onclick="this.select()" />
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            class="col-12"
            onclick="this.select()"
          >Wiadomość</textarea>
          <button class="btn btn-secondary">Wyślij</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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