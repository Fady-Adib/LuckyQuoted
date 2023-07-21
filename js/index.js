var QuotePlace = document.getElementById(`Quote`).innerHTML = ``
var QuotedPlace = document.getElementById(`Quoted`).innerHTML = ``

var allQuote = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        quoted: `― Oscar Wilde`
    },
    {
        quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        quoted: `― Marilyn Monroe`
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        quoted: `― Albert Einstein`
    },
    {
        quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
        quoted: `― Oscar Wilde`
    }, {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        quoted: `― Elbert Hubbard`
    },
    {
        quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
        quoted: `― Maya Angelou`
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`,
        quoted: `― Mark Twain`
    },
    {
        quote: `“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”`,
        quoted: `― Albert Camus
`
    },
    {
        quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
        quoted: `― Robert Frost`
    },
    {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        quoted: `― Dr. Seuss`
    },
    {
        quote: `“The masses never revolt of their own accord, and they never revolt merely because they are oppressed. Indeed, so long as they are not permitted to have standards of comparison, they never even become aware that they are oppressed.”`,
        quoted: `― George Orwell`
    },
    {
        quote: `“Identity was partly heritage, partly upbringing, but mostly the choices you make in life. ~ Bran”`,
        quoted: `― Patricia Briggs, Cry Wolf`
    }
]
var lastRondom
function newQuote() {
    var random;
    do {
        random = Math.floor(Math.random() * allQuote.length);
    } while (random === lastRondom);

    lastRondom = random;

    QuotePlace = document.getElementById('Quote').innerHTML = allQuote[random].quote;
    QuotedPlace = document.getElementById('Quoted').innerHTML = allQuote[random].quoted;
}

// ------------------------- plz check this soulution for reapating------------------------------
// function newQuote() {

//     var random = Math.floor(Math.random() * allQuote.length)
//     console.log(random, `rndom`)

// if (lastRondom == random) {
//     random = Math.floor(Math.random() * (allQuote.length-1))
// }

//  lastRondom = random
//    console.log(lastRondom, ` last`)
//  QuotePlace = document.getElementById(`Quote`).innerHTML = allQuote[random].quote
//     QuotedPlace = document.getElementById(`Quoted`).innerHTML = allQuote[random].quoted

// }


