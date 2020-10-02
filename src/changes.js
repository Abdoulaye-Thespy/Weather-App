export const changes = (data) => {
	if (data.townDesc === 'clear sky') {
	  document.body.style.backgroundImage = "url('../dist/images/23.png')"; 
      document.getElementById('bod').style.backgroundImage = "url('../dist/images/23.png')"; 
	}

		else if (data.townDesc === 'few clouds') {
	  document.body.style.backgroundImage = "url('../dist/images/24.png')"; 
      document.getElementById('bod').style.backgroundImage = "url('../dist/images/24.png')"; 
	}

			else if (data.townDesc === 'scattered clouds ') {
	  document.body.style.backgroundImage = "url('../dist/images/25.png')"; 
      document.getElementById('bod').style.backgroundImage = "url('../dist/images/25.png')"; 
	}

			else if (data.townDesc.includes('rain')) {
	  document.body.style.backgroundImage = "url('../dist/images/26.png')"; 
      document.getElementById('bod').style.backgroundImage = "url('../dist/images/26.png')"; 
	}

			else if (data.townDesc.includes('snow')) {
	  document.body.style.backgroundImage = "url('../dist/images/28.png')"; 
      document.getElementById('bod').style.backgroundImage = "url('../dist/images/28.png')"; 
	}
			else if (data.townDesc === 'overcast clouds') {
	  document.body.style.backgroundImage = "url('../dist/images/27.png')"; 
      document.getElementById('bod').style.backgroundImage = "url('../dist/images/27.png')"; 
	}

}