let saveBtn = document.querySelector(".Bsave");
let textarea = document.querySelector("#Qtext");
let textarea1 = document.querySelector("#Qtext1");
const cite1 = document.querySelector("#cite1");


function saveQuote(){
    const blob = new Blob([textarea1.innerHTML.replace("<span","").replace("id","").replace("</span>","").replace("<cite","").replace("id","").replace("=","").replace("=","").replace("</cite>","").replace('cite1">',"").replace('Qtext">',"").replace('"',"").replace('id"','').replace('"','')], {type:"txt"});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Quote By - " + document.querySelector("cite").innerHTML;
    link.href = fileUrl;
    link.click();
};

async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      textarea.textContent = data.content;
      cite1.textContent =data.author;
let qAuthor = data.author;
let qCont = data.content;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
};
updateQuote();

const shareData = {
  title: qCont,
  text: qAuthor,
  url: window.location.href
}

async function shareQuote(){
  try {
    await navigator.share(shareData);
  } catch (err) {
  // error
  }
};
