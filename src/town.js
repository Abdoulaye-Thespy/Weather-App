 
export const addInfo =(info) => {
 console.log(info);
 document.getElementById('town').innerHTML= `${info.townName}`
 document.getElementById('country').innerHTML= `${info.townCountry}`
 document.getElementById('temp').innerHTML= `${info.townTemp}`
 document.getElementById('desc').innerHTML= `${info.townDesc}`
}