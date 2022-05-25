const quotes = [
    {
        quote: "when suffering happens, it forces us to confront life ina diffrent way then we nomally do.",
        author: "Philip Yancey",
    },
    {
        quote: "We are healed of a suffering only by experiencing it to the full",
        author: "Marcel Proust",
    },
    {
        quote: "To live is to suffer, to survive is to find some meaning in the suffering",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Althrough the world is full of suffering, it is full also of the overcomming of it",
        author: "helen Keller",
    },
    {
        quote: "if pain doesn't lead to humility. you have wasted your suffering",
        author: "katerina Stoykova Klemer",
    },
    {
        quote: "God uses suffering as a whetstone, to make men sharp with",
        author: "Henry Ward Beecher",
    },
    {
        quote: "suffering is one of life's great teachers",
        author: "Bryant H.McGill",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward",
        author: "Martin ruther king",
    },
    {
        quote: "Changing legend into fact We shall ride into history Turning myth into truth We shall surely gaze",
        author: "eltonjohn song lyrics",
    }
]
const quote = document.querySelector("#quote span:first-child") 
const author = document.querySelector("#quote span:last-child")


const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author