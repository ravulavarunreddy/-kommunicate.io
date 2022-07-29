function getUrlParameterValue(url, parameter) {
//Todo: complete
if(url.search(parameter)){
  var words = url.split(/&|=/);

  var numberIndex = words.findIndex((word) => word == parameter);
  var nextWord = words[numberIndex + 1];
  console.log(nextWord)
}

}
var url =
“https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby”;
getUrlParameterValue(url,"utm_campaign")
