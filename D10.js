/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A - ok
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20

console.log(`Exercise A`, sum)

/* ESERCIZIO B - ok
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21)

console.log(`Exercise B`, random)

/* ESERCIZIO C - ok
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: `Davide`,
  surname: `Braghi`,
  age: 32,
}

console.log(`Exercise C`, me)

/* ESERCIZIO D - ok
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age

console.log(`Exercise D`, me)

/* ESERCIZIO E - ok
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = [`HTML`, `CSS`, `JS (Very bad..!)`, `Other language`]

console.log(`Exercise E`, me)

/* ESERCIZIO F - ok
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const newSkill = `Before learing new code languages, I would like to improve JS!! XD`

me.skills.splice(2, 0, newSkill)

console.log(`Exercise F`, me)

/* ESERCIZIO G - ok
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const removedSkill = me.skills.splice(4, 1) //risolto!!!

console.log(`Exercise G`, removedSkill)

// console.log(`Exercise G `, me.skills[3], `Correct because it has been deleted`) // non capisco perchè mi segni undefined

// Funzioni

/* ESERCIZIO 1 - ok
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  const diceResult = Math.ceil(Math.random() * 6)
  return diceResult
}

console.log(`Exercise 1`, dice())

dice()

/* ESERCIZIO 2 - ok
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// const n1 = 9
// const n2 = 13

const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return n1
  } else {
    return n2
  }
}

console.log(`Exercise 2`, whoIsBigger(13, 4))

/* ESERCIZIO 3 - ok
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str1) => {
  const splitResult = str1.split(" ")
  console.log(`Exercise 3`, splitResult)
}

splitMe("I love coding")

/* ESERCIZIO 4 - ok
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str2, isTrue) => {
  if (isTrue) {
    const resultStr1 = str2.slice(1)
    console.log(`Exercise 4`, resultStr1)
  } else {
    const resultStr2 = str2.slice(0, -1)
    console.log(`Exercise 4`, resultStr2)
  }
}

deleteOne(`CIAO`, false)

/* ESERCIZIO 5 - ok
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str3) => {
  const removeNumber = str3.replace(/[0-9]/g, ``) // ho cercato su internet: la formula applicata in parentesi /[0-9]/g serve per cercare ed escludere i numeri in una stringa. è una regola fissa da utilizzare ogni qualvolta ? è corretto

  console.log(`Exercise 5`, removeNumber)
}

onlyLetters(`I have 4 dogs`)

/* ESERCIZIO 6 - ok
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (email) => {
  if (email.includes(`@` || `.com`)) {
    const emailResult = true
    console.log(`Exercise 6`, emailResult, `email is valid!`)
  } else {
    alert(`Insert a valid email`)
  }
}

isThisAnEmail(`dade91@msn.com`)

/* ESERCIZIO 7 - ok
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const now = new Date()

const whatDayIsIt = () => {
  const today = now.getDate()
  console.log(`Exercise 7`, today)
}
whatDayIsIt()

/* ESERCIZIO 8 - no
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (n) => {
  let values = []
  for (let i = 0; i < n; i++) {
    values.push(dice())
  }
  // console.log(`Result for each throw: `, values)
  let sum2 = values.reduce((acc, curr) => acc + curr) // prende un primo valore e lo somma per il secondo e cosi via
  // console.log(`Sum of all results: `, sum2)
  let Exercise8 = {
    values: values,
    sum: sum2,
  }
  console.log(`Exercise 8`, Exercise8)
}

rollTheDices(5)

/* ESERCIZIO 9 - ok
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// const howManyDays = (givenDate, givenMonth, givenYear) => {
//   const now = new Date()
//   const todayDay = now.getDate()
//   const todayMonth = now.getMonth() + 1
//   const todayYear = now.getFullYear()
//   const dayDifference = todayDay - givenDate
//   const monthDifference = todayMonth - givenMonth
//   const yearDifference = todayYear - givenYear

//   const fullDifferenceDate = `${dayDifference} ${monthDifference} ${yearDifference}`
//   console.log(
//     `Exercise 9`,
//     ` TIME DIFFERENCES COMPARED TO ACTUAL DATE > days: ${dayDifference}`,
//     `months: ${monthDifference}`,
//     `years: ${yearDifference}`
//   )
// }

// howManyDays(7, 6, 2025)
const howManyDays = (givenDate, givenMonth, givenYear) => {
  const now = new Date()

  const todayDay = now.getDate()
  const todayMonth = now.getMonth() + 1
  const todayYear = now.getFullYear()

  const dayDifference = todayDay - givenDate
  const monthDifference = todayMonth - givenMonth
  const yearDifference = todayYear - givenYear

  const fullDifferenceDate = `${dayDifference} ${monthDifference} ${yearDifference}`
  console.log(
    `Exercise 9`,
    ` TIME DIFFERENCES COMPARED TO ACTUAL DATE > days: ${dayDifference}`,
    `months: ${monthDifference}`,
    `years: ${yearDifference}`
  )
}

howManyDays(13, 12, 1991)

/* ESERCIZIO 10 - ok
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (birthdayDay, birthdayMonth) => {
  const now = new Date()

  const todayDay = now.getDate()
  const todayMonth = now.getMonth() + 1

  const dayDifference = todayDay - birthdayDay
  const monthDifference = todayMonth - birthdayMonth
  if (todayDay === birthdayDay && todayMonth === birthdayMonth) {
    return console.log(`Exercise 10: true`)
  } else {
    return console.log(`Exercise 10: false`)
  }
}

isTodayMyBirthday(13, 12)

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

/* ESERCIZIO 11 - ok
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let animale = {
  tipo: `cane`,
  razza: `golden retriver`,
}

const deleteProp = (obj, str4) => {
  delete obj[str4]
  console.log(`Exercise 11`, animale)
}
deleteProp(animale, `razza`)

/* ESERCIZIO 12 - ok
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  const latestMovie = movies.reduce((currentNewest, movie) => {
    // `reduce`, percorre l'array `movies` accumolando un valore mano a mano: il parametro `currentNewest` rappresenta il film attualmente considerato come il più recente, inizia con il primo film dell'array grazie all'argomento `movies[0]` inserito come valore iniziale. - Il secondo parametro `movie` rappresenta ogni singolo elemento (film) dell'array durante l'iterazione.
    return parseInt(movie.Year) > parseInt(currentNewest.Year)
      ? movie
      : currentNewest
  }, movies[0])

  //  parseInt(movie.Year) converte l'attributo Year del film corrente in un numero (molto utile se Year è una stringa).
  //  parseInt(currentNewest.Year) converte anch'esso l'anno del film attualmente ritenuto il più recente.
  //  L'operatore ternario ? confronta i due anni:
  //  Se parseInt(movie.Year) è maggiore, significa che il film corrente (movie) è più recente e diventa il   nuovo valore accumulato (currentNewest).
  //  Se non lo è, si mantiene il valore attuale (currentNewest).

  console.log(`Exercise 12`, "The newest movie is:", latestMovie)
}

newestMovie()

/* ESERCIZIO 13 - ok
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => {
  return movies.length
}
console.log(`Exercise 13`, movies.length)

countMovies()

/* ESERCIZIO 14 - ok
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const yearMovieBox = []

const onlyTheYears = () => {
  movies.forEach((i) => {
    yearMovieBox.push(i.Year)
  })
  console.log(`Exercise 14`, yearMovieBox)
}

onlyTheYears()

/* ESERCIZIO 15 - ok
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const moviesAfter2000 = []

const onlyInLastMillennium = () => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year >= 2000) {
      moviesAfter2000.push(movies[i].Year)
    }
  }
  console.log(`Exercise 15`, moviesAfter2000)
}

onlyInLastMillennium()

/* ESERCIZIO 16 - ok
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  const yearMovieBoxNumberArray = []
  yearMovieBox.forEach((i) => {
    const yearMovieBoxNumber = parseInt(i++)
    yearMovieBoxNumberArray.push(yearMovieBoxNumber)
  })
  let sum = yearMovieBoxNumberArray.reduce((x, y) => {
    return x + y
  }, 0)
  console.log(`Exercise 16`, sum)
}

sumAllTheYears()

/* ESERCIZIO 17 - ok
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// console.log(movies[0].Title)

// const searchByTitle = (movieTitle) => {
//   for (let i = 0; i < movies.length; i++) {
//     const movieTitlesText = movies[i].Title
//     if (movieTitlesText === movieTitle) {
//       console.log(`ok`)
//     } else {
//       console.log(`no`)
//     }
//   }
// }

// searchByTitle(`The Avengers`)

const searchByTitle = (movieTitle) => {
  // const movieTitlesText = movies[i].Title
  movies.forEach((movie) => {
    const movieTitleText = movie.Title
    if (movieTitleText === movieTitle) {
      console.log(`Exercise 17`, movie)
    }
  })
}

searchByTitle(`Lord of the Flies`)

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (searchTitle) => {
  const match = []
  const unmatch = []
  movies.forEach((movie) => {
    const movieTitleText = movie.Title
    // console.log(movieTitleText)
    if (
      movieTitleText.toLowerCase().includes(searchTitle.toLowerCase()) === true
    ) {
      match.push(movie)
    } else {
      unmatch.push(movie)
    }
  })
  console.log(match)
  console.log(unmatch)
  // console.log(`Exercise 18`, `MATCH`, match)
  // console.log(`Exercise 18`, `UNMATCH`, unmatch)
}

searchAndDivide(`the`)

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
