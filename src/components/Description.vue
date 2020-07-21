<template>
  <div class="description row justify-content-between">
    <div class="col-3 d-none d-lg-flex d-xl-flex"></div>
    <div class="about-us col-sm-11 col-md-9 col-lg-6">
      <h3>Nam możesz zaufać</h3>
      <p>
        <b>MB Biuro Usług Księgowych</b> to dynamicznie rozwijające się biuro z Wrocławia, świadczące szeroki zakres usług z pełnym zaangażowaniem w sprawy klienta. Oferujemy profesjonalną obsługę na wysokim poziomie, a także dbamy o partnerskie relacje z naszymi klientami.
      </p>
      <p>
        <b>MB Biuro Usług Księgowych</b> to nowoczesne biuro nastawione na pełne zaangażowanie w rozwiązywanie problemów, zapewniając przy tym najwyższy standard usług. Dzięki wiedzy, systematycznym podnoszeniem kwalifikacji zawodowych, a także monitorowaniu stale zmieniających się przepisów prawnych, jesteśmy w stanie świadczyć usługi na najwyższym poziomie w pełni zgodnym z aktualnymi rozporządzeniami.
      </p>
      <p>
        MB Biuro Usług Księgowych prowadzi również kompletną księgowość dla klientów
        <b>branży medycznej</b> bez względu na wybraną formę opodatkowania i rodzaj specjalizacji sektora medycznego.
      </p>
    </div>
    <div class="sidebar col-sm-6 col-md-3 col-lg-2"><img src="images/award-logo.png" class="img-fluid" alt="Orły Rachunkowości 2019" /></div>
  </div>
</template>

<script>
</script>

<style scoped>
.description {
  min-height: 400px;
  background-color: #cdcbd1;
}
.about-us {
  max-width: 630px;
  min-width: 350px;
  margin: auto;
  padding-bottom: 50px;
}
.sidebar{
  margin: auto;
  margin-top: 100px;
  max-width: 200px;
}

@media screen and (max-width: 765px){
.sidebar{
  margin: auto;
  margin-bottom: 50px;
}
}
h3 {
  font-size: 48px;
  color: #4d4b4b;
  font-weight: normal;
  margin: auto;
  text-align: center;
  font-family: "Anton", sans-serif;
  padding-top: 50px;
  padding-bottom: 30px;
}
p {
  font-size: 20px;
  color: #4d4b4b;
  font-weight: normal;
  margin: auto;
  text-align: justify;
  font-family: sans-serif;
  padding-bottom: 30px;
  line-height: 1.4;
}
</style>
