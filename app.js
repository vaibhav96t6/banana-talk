let txt_input = document.querySelector("#enter_Text"); //or we can use query selector
var btnelement = document.querySelector("#btn-translate");
//on clicking translate we will add a event listener
var Ogurl = "https://api.funtranslations.com/translate/minion.json";
//hello
function addTexttoURL() {
  return Ogurl + "?" + "text=" + txt_input.value;
}

function fun() {
  var txt_output = document.querySelector("#output-text");
  fetch(addTexttoURL())
    .then((res) => res.json())
    .then((data) => {
      var output = data.contents.translated;
      txt_output.innerText = output;
    })
    .catch((error) => alert(error));
}

btnelement.addEventListener("click", fun); //on click do this
