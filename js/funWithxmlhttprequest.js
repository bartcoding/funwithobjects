
// define a variable, requestURL, that holds the location of a resource
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//we make a new instance of the xmlhttprequest class
let request = new XMLHttpRequest();

//define the httpmethod we will use and the location we will send the request to
request.open('GET', requestURL);

//tell the request object what kind of response it can expect
request.responseType = 'json';

//send the request
request.send();



//when the response comes back, we will execute the following function
request.onload = function() {
    const superHeroes = request.response;
    fillInHeaderComponentWithSuperheroData(superHeroes);
  }

function fillInHeaderComponentWithSuperheroData(superheroes){

    //set the headers with the correct data, etc..

}