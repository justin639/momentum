const quotes = [
    {
        quote: "quote1",
        author: "A",
    },
    {
        quote: "quote2",
        author: "B",
    },
    {
        quote: "quote3",
        author: "C",
    },
    {
        quote: "quote4",
        author: "D",
    },
    {
        quote: "quote5",
        author: "E",
    },
    {
        quote: "quote6",
        author: "F",
    },
    {
        quote: "quote7",
        author: "G",
    },
    {
        quote: "quote8",
        author: "H",
    },
    {
        quote: "quote9",
        author: "I",
    },
    {
        qtoe: "quote10",
        author: "J",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round(Math.random()*10);
// Math.ceil(Math.random()*10);
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;