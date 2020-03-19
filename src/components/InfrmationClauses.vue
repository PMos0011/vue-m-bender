<template>
  <div class="size-modal-content">
    <div>
      <read-more
        more-str="rozwiń"
        :text="msg"
        link="#"
        less-str="zwiń"
        :max-chars="400"
      ></read-more>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: `<h6>
          KLAUZULA INFORMACYJNA RODO <br />
          do formularza kontaktowego/newsletter
        </h6>
        Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu
        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
        ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
        sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
        95/46/WE (ogólne rozporządzenie o ochronie danych), zwane dalej RODO,
        informujemy, że:
       
        <ul>
          <li>
            Administratorem Pani/Pana danych jest Monika Moskwa prowadząca
            działalność gospodarczą pod firmą MB Biuro Usług Księgowych Monika
            Moskwa, z siedzibą przy ul. Królewieckiej 45, 54-117 Wrocław, NIP:
            6151848978, tel.: +48 531 405 500, email: inspektor@m-bender.pl,
            dalej zwany ADO.
          </li>
          <li>
            Inspektorem Ochrony Danych Osobowych jest: Monika Moskwa,
            inspektor@m-bender.pl
          </li>
          <li>
            Pani/Pana dane osobowe będą chronione i przetwarzane w celu:
            <ul>
              <li>
                prowadzenia z Panią/Panem korespondencji i obsługi sprawy,
                której ona dotyczy oraz w celu ewentualnego dochodzenia roszczeń
                lub obrony przed takimi roszczeniami – podstawą prawną jest
                prawnie uzasadniony interes ADO zgodnie z art. 6 ust. 1 lit f
                RODO – tj. obsługa spraw zgłoszonych przez formularz,
                prowadzenie korespondencji z zainteresowanymi podmiotami i
                obsługa zgłaszanych przez nich spraw;
              </li>
              <li>
                przestawienia oferty, w związku umożliwienia złożenia i
                realizacji zamówień oraz zawierania umów sprzedaży produktów
                oferowanych przez ADO za pośrednictwem Serwisu (na podstawie
                art. 6 ust. 1 lit. (b) RODO), jeżeli zapytanie wysłane przez
                formularz zawierało prośbę o ofertę,
              </li>
            </ul>
          </li>
          <li>
            Pani/Pana dane osobowe będą przechowywane przez okres niezbędny do
            realizacji celu, na który wyraziła Pani/Pan zgodę, z systematyczną
            kontrolą oceny ich przydatności, nie dłużej niż co 3 lata od daty
            ich wprowadzenia. Okres przetwarzania danych osobowych może zostać
            każdorazowo przedłużony o okres przedawnienia roszczeń, jeżeli
            przetwarzanie danych osobowych będzie niezbędne dla dochodzenia
            ewentualnych roszczeń lub obrony przed takimi roszczeniami przez
            ADO. W zakresie, w jakim dane przetwarzane są w celu kierowania do
            Pani/Pana treści marketingowych, będą one przetwarzane do czasu
            wycofania zgody lub wniesienia sprzeciwu względem takiego
            przetwarzania.
          </li>
          <li>
            Pani/Pana dane nie będą przekazywane innym podmiotom poza:
            dostawcami systemów informatycznych dla ADO, podmiotami świadczącymi
            na rzecz ADO usługi niezbędne do wykonania zawieranej z Panią/Panem
            umowy, w tym usługi prawne, operatorami pocztowymi i kurierami,
            bankami w zakresie realizacji płatności, niektórymi osobom
            wykonującym regulowane zawody, takim jak prawnicy.
          </li>
          <li>
            Przysługuje Pani/Panu prawo: dostępu do treści danych osobowych, w
            tym żądania wydania ich kopii oraz żądania ich sprostowania,
            usunięcia danych osobowych (prawo do bycia zapomnianym),
            ograniczenia przetwarzania danych osobowych, prawo do przenoszenia
            danych osobowych do innego administratora, prawo wniesienia
            sprzeciwu względem przetwarzania danych osobowych, w tym
            profilowania, oraz na potrzeby marketingu bezpośredniego, do
            cofnięcia zgody w przypadku, gdy ADO będzie przetwarzać Pani/Pana
            dane osobowe w oparciu o zgodę, w dowolnym momencie i w dowolny
            sposób, bez wpływu na zgodność z prawem przetwarzania, którego
            dokonano na podstawie zgody przed jej wycofaniem. Przysługuje
            Pani/Panu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych, gdy uzna Pani/Pan, że przetwarzanie danych osobowych
            narusza przepisy RODO.
          </li>
          <li>
            Przysługuje Pani/Panu prawo wniesienia sprzeciwu względem
            przetwarzania danych osobowych w celu kierowania do Pani/Pana treści
            marketingowych. Ponadto względem przetwarzania danych osobowych dla
            celów wynikających z prawnie usprawiedliwionych interesie ADO
            przysługuje Pani/Panu prawo wniesienia sprzeciwu z przyczyn
            związanych z Pani/Pana szczególną sytuacją.
          </li>
          <li>
            Podanie przez Pana/Panią danych osobowych jest dobrowolne w zakresie
            niezbędnym do udzielenia informacji.
          </li>
        </ul>`
    };
  }
};
</script>
<style scoped>
.size-modal-content {
  padding: 10px;
  font-style: 2px;
  font-weight: 200;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-small;
}
</style>
