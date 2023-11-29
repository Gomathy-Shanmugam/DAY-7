//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all)
//a.Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result)
    var output = result.filter((ele) =>ele.region == 'Asia' );
    console.log(output);
    


    //b.Get all the countries with a population of less than 2 lakhs using Filter function    
   //var res1 = res.filter((ele) => ele.name);
    //console.log(res1)
    var res = result.filter((ele) => ele.population<200000 );
    console.log(res);
    var res1 = res.map((ele) => ele.region);
    console.log(res1);
    

//c.Print the following details name, capital, flag, using forEach function
     result.forEach(function(country){
        var name = country.name.common;
        var capital = country.capital;
        var flags = country.flags.png;

     
        console.log("name : " + name);
        console.log("capital : " +capital);
        console.log("flags : " + flags)
     
});


//e.Print the country that uses US dollars as currency.
var out = result.filter((ele) => ele.currencies );
console.log(out);
var currency = out.map((ele) => ele.currencies);
console.log(currency);
var rupees = currency.filter((elem) => elem.USD);
console.log(rupees);


//d.Print the total population of countries using reduce function
var c2 = result.filter((ele) => ele.population );
console.log(c2);
var c3 = c2.map((ele) => ele.population);
console.log(c3);
var c4 = c3.reduce((acc,ele)=> acc+ele,0);
console.log(c4);



}