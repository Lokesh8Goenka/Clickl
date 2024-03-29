import ebook from "./images/ebook.png";
import more from "./images/more.png";
import poem from "./images/poem.png";
import contract from "./images/summary.jpg";
import shortstory from "./images/Story.png";
import Translate from "./images/languages.png";
import Audio from "./images/text-to-speech.png";



const Cards = [
    {
        title: "Summary",
        text: "Have a long documnet to read? Summarize it!",
        imgURL: contract
    },
    // {
    //     title: "Ebook",
    //     text: "Just click hand written story and upload them to get your own EBook.",
    //     imgURL: ebook
    // },
    // {
    //     title: "Poem",
    //     text: "Are you a poet?  Then try the digital version of your poem!",
    //     imgURL: poem
    // },
    // {
    //     title: "Short Story",
    //     text: "Written a short story?   Get a digital copy now!",
    //     imgURL: shortstory
    // },
    {
        title: "Translation",
        text: "Unable to get a language   Get it in your language!",
        imgURL: Translate
    },
    {
        title: "Text To Audio",
        text: "Want An Audio Book? Try Here!",
        imgURL: Audio
    },
    {
        title: "More",
        text: "Want anything else?   Write to us!",
        imgURL: more
    },
]

export default Cards;