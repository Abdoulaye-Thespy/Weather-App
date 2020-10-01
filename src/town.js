 
export const addInfo =(info) => {
 document.getElementById('town').innerHTML= `${info.townName}`
 document.getElementById('country').innerHTML= `${info.townCountry}`
 document.getElementById('temp').innerHTML= `${info.townTemp} °C`
 document.getElementById('desc').innerHTML= `${info.townDesc}`
}