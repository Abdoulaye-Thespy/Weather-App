 import {data} from './index';
const unitBtn = document.getElementById('switch');
let unit = 'C';
const changeUnit = () => {
const unitBtns = document.getElementById('switch');
document.getElementById('temp').innerHTML= `${data.townTemp} °F`

	if(unit==='F') {
		unitBtns.innerHTML=`SWITCH TO °F`;
		document.getElementById('temp').innerHTML= `${data.townTemp} °C`
		unit = 'C';
	}
     else if (unit==='C'){
		unitBtns.innerHTML=`SWITCH TO °C`;
		let tempF = null;
		console.log(data.townTemp);
		tempF= ((data.townTemp * 9)/5) + 32;
		tempF=tempF.toFixed(2);
		document.getElementById('temp').innerHTML= `${tempF} °F`;
		unit = 'F';
	}

}

unitBtn.addEventListener('click', changeUnit);