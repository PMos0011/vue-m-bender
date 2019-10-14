<template>
  <modal
    name="size-modal"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="60%"
    height="auto"
  >
    <div class="size-modal-content">
      <div>
        <h1>Polityka dotycząca cookies</h1>W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki. Dodatkowo, korzystanie z naszej witryny oznacza akceptację przez Państwa klauzuli przetwarzania danych osobowych udostępnionych drogą elektroniczną.
        Dla Państwa wygody m-bender.pl używa plików cookies po to, by dostosować serwis do potrzeb użytkowników, a także w celach statystycznych.
        Pliki cookies (tzw. ciasteczka) to niewielkie pliki tekstowe wysyłane przez odwiedzany serwis internetowy do urządzenia internauty (komputer, smartfon itp.). Nie zawierają one żadnych danych osobowych.
        <br />
        <br />Witryna m-bender.pl stosuje pliki cookies:
        <ul>
          <li>cookies google-analytics.com – służą do prowadzenia statystyk dla witryny m-bender.pl; dokładny sposób działania i politykę prywatności Google Analytics można znaleźć pod adresem: http://www.google.com/analytics/learn/privacy.html,</li>
        </ul>W większości przeglądarek internetowych można: kasować pliki typu cookies z twardego dysku komputera (z poziomu ustawień przeglądarki), zablokować wszystkie przysyłane pliki typu cookies lub ustawić ostrzeżenie przed zapisaniem ich na dysku.
          Należy mieć na uwadze, że zmiany ustawień tych plików polegające na ograniczeniu ich stosowania mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych je stosujących np. uniemożliwiając zalogowanie się na konto pocztowe. Brak zmiany tych ustawień oznacza akceptację dla stosowania plików typu cookies. <br><br>
          Poniżej wskazujemy sposób zmiany ustawień cookies w najbardziej popularnych wyszukiwarkach:
        <ul>
          <li>
            Google Chrome
            <br />Menu > Ustawienia > Pokaż ustawienia zaawansowane > Prywatność > Ustawienia treści > Pliki cookies – należy wybrać odpowiednią opcję.
          </li>
          <li>
            Internet Explorer
            <br />Menu > Narzędzia > Opcje internetowe > Prywatność – należy wybrać odpowiednią opcję.
          </li>
          <li>
            Mozilla Firefox
            <br />Menu > Opcje > Prywatność > Historia – należy wybrać odpowiednią opcję.
          </li>
          <li>
            Opera
            <br />Menu > Preferencje > Zaawansowane > Ciasteczka – należy wybrać odpowiednią opcję.
          </li>
          <li>
            Safari
            <br />Menu > Preferencje > Prywatność > Pliki cookies – należy wybrać odpowiednią opcję.
          </li>
        </ul>
      </div>
    </div>
  </modal>
</template>
<script>
export default {};
</script>
<style>
.size-modal-content {
  padding: 10px;
  font-style: 13px;
}
</style>