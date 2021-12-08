// API FETCH 
//         - obecny standard dla asynchronicznych połączeń zgodnych z protokołem HTTP
//         - dostarcza metodę fetch (pobierz) która umożliwia wysyłania requestów 
//         - dostarcza także obiekt odpowiedzi i metody do pracy z odpowiedzią (np. metodę json do pracy z JSON czy metodę redirect do przekierowań)


// Funkcja FETCH 

// fetch('adres Api')
//     .then((obiekt_odpowiedzi )=> obiekt_odpowiedzi.json())
//     .then((dane)=> /wyświetl w DOM/)
//     .catch((error)=> /wyświetl błąd/)



                    // ZADANIE PIERWSZEaa

    // const getUsers = (e)=>{
    //     e.preventDefault();

    //     // const url ' jakieś podane API '

    //     fetch(url)// obietnica - pending state
    //     //obietnica = resolve || rejected 
    //     // jeśli resole wtedy then 
    //         .then(response => {
    //             if(response.status !== 200){
    //                 throw Error('To nie jest odpowiedź 200')
    //             }
    //             else{
    //                 return response.json() // fetch API = json() z body wyodrębnia json, i parsje go na obiekt JS
    //             }
    //         }) 
    //         .then(json => showUsers(json.results)) // jeśli odbierze informacje z JSON wykonuje się funkcja showUsers()
    //         .catch(err => console.log(err))
    // }

    // const showUsers = (users) =>{
    //     const resultArea = document.querySelector('.jakiś kontener');
    //     resultArea.innerHtml = ""; // w ten sposób resetujemy za każdym przyciśnięciem cały kontener, inaczej każde naciśnięcie przycisku wyświetlałoby coraz więcej wyników, a nie tyle ile ustawiliśmy 
    //     users.forEach(user =>{
    //         const item = document.createElement('div');
    //         item.className = 'user';
    //         item.innerHTML = `
    //         <div class="user__name"> ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    //         <img class="user__img" src="${user.picture.medium}">
    //         `
    //         resultArea.appendChild(item);

    //     })


    // }
    // document.querySelector('jakiśPrzycisk').addEventListener('submit', getUsers)