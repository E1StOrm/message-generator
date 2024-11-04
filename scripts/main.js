import { Message } from "./data.js";
import messages from "./data.js";

window.addEventListener("load", (evt) => {
    const rndMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const quote = document.createElement("blockquote");
    //quote.appendChild(document.createTextNode(rndMessage.message));
    
    const small = document.createElement("small");
    small.appendChild(document.createTextNode(rndMessage.author));

    const container = document.getElementById("message");
    container.appendChild(quote);
    container.appendChild(small);

    let index = 0;
    let interval = setInterval(() => {
        quote.appendChild(document.createTextNode(rndMessage.message.charAt(index++)));
        if (index >= rndMessage.message.length) {
            clearInterval(interval);
        }
    }, 30);
});
