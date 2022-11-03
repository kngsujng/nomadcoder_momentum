const quotes = [
    {
        quote: "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.", 
        author: "Mary Wilson Little"
    },
    {
        quote: "We can only learn to love by loving.", 
        author: "Iris Murdoch"
    },
    {
        quote: "Do not do to others what angers you if done to you by others.", 
        author: "Socrates"
    },
    {
        quote: "Nothing fails like success.", 
        author: "Gerald Nachman"
    },
    {
        quote: "Talent wins games, but teamwork wins championships.", 
        author: "Michael Jordan"
    },
    {
        quote: "Where is human nature so weak as in the bookstore?", 
        author: "Henry Ward Beecher"
    },
    {
        quote: "This bud of love, by summer's ripening breath, May prove a beauteous flower when next we meet.", 
        author: "William Shakespeare"
    },
    {
        quote: "The best thing about the future is that it comes one day at a time.", 
        author: "Abraham Lincoln"
    }
];
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
