<template>
  <div class="valuation-container" id="valuation-selector">
    <form @submit="sendValuation">
      <p class="black-header">Formularz wyceny obsługi księgowej</p>
      <div class="valuation-form row justify-content-between">
        <div class="col-lg-5">
          <p class="black-text">Forma organizacyjno-prawna:</p>
          <v-select v-model="organizationForms" :options="organization">
            <template #search="{attributes, events}">
              <input
                class="vs__search"
                :required="!organizationForms"
                v-bind="attributes"
                v-on="events"
              />
            </template>
          </v-select>
          <p class="black-text">Rodzaj usługi:</p>
          <v-select v-model="servicesForms" :options="services">
            <template #search="{attributes, events}">
              <input
                class="vs__search"
                :required="!servicesForms"
                v-bind="attributes"
                v-on="events"
              /> </template
          ></v-select>
          <p class="black-text">Rodzaj ewidencji:</p>
          <v-select v-model="rollForms" :options="roll">
            <template #search="{attributes, events}">
              <input
                class="vs__search"
                :required="!rollForms"
                v-bind="attributes"
                v-on="events"
              /> </template
          ></v-select>
          <p class="black-text">Forma opodatkowania:</p>
          <v-select v-model="taxationForms" :options="taxation">
            <template #search="{attributes, events}">
              <input
                class="vs__search"
                :required="!taxationForms"
                v-bind="attributes"
                v-on="events"
              /> </template
          ></v-select>
          <p class="black-text">Firma jest podatnikiem VAT:</p>
          <input
            type="radio"
            id="VAT_Yes"
            value="tak"
            name="vat"
            v-model="vatRadio"
          />
          <label class="pointer" for="VAT_Yes">Tak</label>
          <br />
          <input
            type="radio"
            id="VAT_No"
            value="nie"
            name="vat"
            v-model="vatRadio"
          />
          <label class="pointer" for="VAT_No">Nie</label>
          <p class="black-text">Obsługa kadrowo-płacowa:</p>
          <input
            type="radio"
            id="payroll_Yes"
            value="tak"
            name="payroll"
            v-model="payrollRadio"
            required
          />
          <label class="pointer" for="payroll_Yes">Tak</label>
          <br />
          <input
            type="radio"
            id="payroll_No"
            value="nie"
            name="payroll"
            v-model="payrollRadio"
            required
          />
          <label class="pointer" for="payroll_No">Nie</label>
        </div>
        <div class="col-lg-5">
          <p class="black-text">Ilość faktur sprzedaży w miesiącu:</p>
          <input
            type="text"
            id="sell-invoices"
            name="sell-invoices"
            v-model="sellInvoices"
            class="form-control"
            required
          />
          <p class="black-text">Ilość faktur zakupu w miesiącu:</p>
          <input
            type="text"
            id="buy-invoices"
            name="buy-invoices"
            v-model="buyInvoices"
            class="form-control"
            required
          />
          <p class="black-text">Ilość pozostałych dokumentów:</p>
          <input
            type="text"
            id="documents"
            name="documents"
            v-model="documents"
            class="form-control"
            required
          />
          <p class="black-text">Ilość zatrudnionych osób:</p>
          <input
            type="text"
            id="employees"
            name="employees"
            v-model="employees"
            class="form-control"
            required
          />
          <p class="black-text">Komentarz/uwagi (niewymagane):</p>
          <textarea
            name="message"
            id="message"
            v-model="message"
            cols="30"
            rows="5"
            class="col-12"
          ></textarea>
        </div>
      </div>
      <hr />
      <div class="valuation-form row justify-content-between">
        <div class="col-lg-5">
          <p class="black-text">Osoba kontaktowa:</p>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            required
            class="form-control"
          />
          <p class="black-text">Adres e-mail:</p>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="form-control"
            required
          />
          <p class="black-text">Telefon (niewymagane):</p>
          <input
            type="phone"
            id="phone"
            name="phone"
            v-model="phone"
            class="form-control"
          />
          <button type="submit" class="btn btn-secondary">Wyślij</button>
        </div>
        <div class="col-lg-5" id="response">{{ response }}</div>
      </div>
    </form>
    <app-information></app-information>
  </div>
</template>

<script>
import Infromation from "./InfrmationClauses";

export default {
  data() {
    return {
      organization: [
        "osoba fizyczna",
        "spółka kapitałowa",
        "spółka osobowa",
        "inna",
        "nie wiem"
      ],
      services: ["handel", "produkcja", "usługi", "inna"],
      roll: [
        "księga przychodów i rozchodów",
        "ryczałt ewidencjonowany",
        "najem lub dzierżawa",
        "księga rachunkowa",
        "nie wiem"
      ],
      taxation: [
        "zasady ogólne",
        "podatek liniowy",
        "ryczałt",
        "podatek od osób prawnych",
        "nie wiem"
      ],

      organizationForms: "",
      servicesForms: "",
      rollForms: "",
      taxationForms: "",
      vatRadio: "tak",
      payrollRadio: "tak",
      sellInvoices: "",
      buyInvoices: "",
      documents: "",
      employees: "",
      message: "",
      name: "",
      email: "",
      phone: "",
      response: ""
    };
  },

  methods: {
    sendValuation(e) {
      document.body.style.cursor = "wait";
      e.preventDefault();
      var contactForm = this;
      this.axios
        .post("https://m-bender.pl/php/mailer_valuation.php", {
          organizationForms: this.organizationForms,
          servicesForms: this.servicesForms,
          rollForms: this.rollForms,
          taxationForms: this.taxationForms,
          vatRadio: this.vatRadio,
          payrollRadio: this.payrollRadio,
          sellInvoices: this.sellInvoices,
          buyInvoices: this.buyInvoices,
          documents: this.documents,
          employees: this.employees,
          message: this.message,
          name: this.name,
          email: this.email,
          phone: this.phone
        })
        .then(response => {
          contactForm.response = response.data;
          document.body.style.cursor = "default";
        })
        .catch(error => {
          contactForm.response = "Coś poszło nie tak. Spróbuj ponownie później";
          console.log(error);
          document.body.style.cursor = "default";
        });
    }
  },
  components: {appInformation: Infromation }
};
</script>

<style scoped>
.valuation-container {
  font-family: "Cinzel", sans-serif;
  font-weight: bold;
  color: #4b4244;
  background-color: #cdcbd1;
  padding-top: 50px;
  padding-bottom: 100px;
}
.valuation-form {
  width: 80%;
  margin: auto;
  margin-top: 50px;
}

.black-text {
  font-size: 22px;
  margin-top: 20px;
}
.black-header {
  text-align: center;
  font-size: 32px;
}
.pointer {
  cursor: pointer;
}
</style>

<style>
.vs__search {
  cursor: pointer;
}
.vs__dropdown-toggle {
  background-color: white;
}
.form-control {
  margin-top: 20px;
}
.btn {
  margin-top: 30px;
}
</style>
