const sendRequest = (method, url, data) => {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
		
	xhr.responseType = 'json';
		
	if (data) {
		xhr.setRequestHeader('Content-Type','application/json');
	}
		
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			renderResponse(xhr.response);
		}
	}
		
	xhr.send(JSON.stringify(data));
	};


getWords = () => {
	console.log("getting words")		
	const query = document.getElementById("input").value;
	const endpoint = 'https://api.datamuse.com/words?sp=*' + query + '*';
	sendRequest('GET',endpoint);
}

	
	


			
