// //  API (Application Programming Interface)

// //  Zbiór narzędzi czy danych, które jeden program (np. web server) udostępnia innemu (np. przeglądarce)

// //  Bardzo często mówiąc o API dla stron i aplikacji myślimy o RESTful API (REST to pewne zasady dotyczące API i nie każde API jest REST).

// //  Web API to dane/narzędzia udostępniane przez protokół HTTP za pomocą endpointów(adresów url ) i dla RESTful API spełniające dodatkowe wymogi REST 

// //  Tworzenie Webowego Api odbywa się po stronie serwera - polega na przygotowaniu web serwer/ aplikacji serwerowej 
// //  na przyjęcie requesta zawierającego dany adres url i metodę HTTP oraz przygotowaniu całej logiki potrzebnej do obsługi takeigo żądania(backend)



// ENDPOINT 

// Api jest najczęściej udostępniane przez zdefiniowany (na serwerze ) adres URL.apply

// https://jakiś-host.com/api/articles/id

// Nasz Porgram wysyła request pod dany adres, określa również metodę np: 
//         - GET(domyślna metoda), 
//         - POST (do przesyłania danych )
//         - PUT 
//         - DELETE
//     w zależności od wysłanej metody endpoint może zachowywać się inaczej.



// API PUBLICZNE,  UWIERZYTELNIANIE i AUTORYZACJA 
 
//     API może być publiczne i prywatne. Bardzo wiele aplikacji udostępnia swoje publiczne API,
//      dzięki czemu inne serwisy/aplikacje mogą korzystać z ich narzędzi. danych w swoich rozwiązaniach.API

//         Uwierzytelnianie (authentication) - technika uwierzytelniania (dostęp do API) to najczęściej API key lub OAUTH.API
//         Autoryzacja - Wiem kim jesteś, sprawdzę czy masz uprawnienia do tych konktetnych danych.




