//Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);
}


//Get all the countries with population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const pop=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(pop);
}


//Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })
}


//Print the total population of countries using reduce function 


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);
}


//Print the country which uses US Dollars as currency using arrow function

var countries = [
    { name: 'United States', currency: 'USD' },
    { name: 'India', currency: 'INR' },
    { name: 'Australia', currency: 'AUD' },
    { name: 'Canada', currency: 'CAD' },
    { name: 'Japan', currency: 'JPY' },
  ];
  
  var result = countries.find(country => country.currency === 'USD');
  console.log(result.name); 