var btnTranslate = document.querySelector("#btn-translate");

var inputTxt = document.querySelector("#input-txt");

var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json"




function gettranslationURL(input){

    return serverURL+"?"+"text="+ input
}

function errorHandler(error){

    console.log(" error occured", error);
    alert("Something wrong with server. Please try after some time");
 
}


function clickHandler(){

    var txtInput = inputTxt.value; 

    fetch(gettranslationURL(txtInput))
    .then (response =>response.json())
    .then (json=>
        {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)

// Emoji\

