const sendTextButton = document.querySelector("#sendText");
const sendHtmlButton = document.querySelector("#sendHtml");
const feed = document.querySelector("#feed");
const message = document.querySelector("#msg");

sendTextButton.addEventListener('click', () => {
    const input = message.value;
    if (!input) return;

    const li = document.createElement("li");
    li.textContent = input;
    feed.append(li);
});

sendHtmlButton.addEventListener('click', () => {
    const input = message.value;
    if (!input) return;

    const li = document.createElement("li");
    li.innerHTML = input;
    feed.append(li);
});