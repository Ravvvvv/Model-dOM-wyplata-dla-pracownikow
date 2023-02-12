$(document).ready(function () {
   const btnSum = $('#oblicz');
   btnSum.click(function () {
      // podlaczenie przeycisku
      // console.log('btnsum');
      // console.log($('.czas' + '.stawka'));
      let employees = document.querySelectorAll('[id^="pracownik"]')
      // ^ daje mozliwosc zaglebienia sie.....
      // console.log(employees);
      let najlepsiPracownicySpan = document.querySelector("#najlepsi-pracownicy");
      let najlepsiPracownicy = [];
      Array.from(employees).forEach(function (employee, index) {
         // console.log(employee);

         let time = employee.querySelector('.czas').value
         let rate = employee.querySelector('.stawka').value
         // value- wlasciwosc/cecha/ danego elementu 
         // console.log(time);
         let payment = 0
         let overtime = 0

         if (time > 160) {
            overtime = time - 160

         } else if (time < 100) {
            employee.style.backgroundColor = "red"
         }

         payment = rate * time + overtime * rate

         // console.log(payment);
         if (time > 160) {

            employee.style.backgroundColor = 'green'

         }

         let wyplata = employee.querySelector('.wyplata')
         console.log(wyplata);


         wyplata.innerText = payment


         najlepsiPracownicy.push({
            name: employee.querySelector('.pracownik').innerText,
            czas: time,
         });


      })
      // console.log(najlepsiPracownicy);

      najlepsiPracownicy.sort((a, b) => b.czas - a.czas);
      // w lini 62 sortujme obiekty z pracownikami zwzgledem ich czasu pracy.
      // pozniej toorzymy nowa tablice skladajaca sie z pierwszych trzech elementow.
      //i nadpisujmy tym zmiena najlpesi pracownicy 

      najlepsiPracownicy = najlepsiPracownicy.slice(0, 3);
      // jako wewnetrzna tresc spana ustawiamy zmapowana tablice najlpeszych pracownikow.
      // Metoda .map dziala podobnie jak petla. Wykonuje callback dla kazdego elementu tablicy. W tym przypadku elemantu naszje tablicy sa obiekty 
      console.log();
      najlepsiPracownicySpan.innerText = najlepsiPracownicy
         .map((employee) => `${employee.name} (${employee.czas} godzin)`)
         .join(", ");
      // console.log("Trzech najlepszych pracowników:", najlepsiPracownicy);

      console.log(najlepsiPracownicy);


     


   })


})

