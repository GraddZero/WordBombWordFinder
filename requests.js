const sendRequest = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		
		xhr.responseType = 'json';
		
		if (data) {
			xhr.setRequestHeader('Content-Type','application/json');
		}
		
		xhr.onreadystatechange = () => {
			if(xhr.readyState === XMLHttpRequest.DONE) {
				resolve(xhr.response);
			} else {
				reject(xhr.response);
			}
		}
		xhr.onerror = () => {
			reject('uhhh... idek');
		}
		
		xhr.send(JSON.stringify(data));
	});
	return promise;
};

getWords = () => {
	console.log("getting words")		
	const query = document.getElementById("input").value;
	const endpoint = 'https://api.datamuse.com/words?sp=*' + query + '*';
	sendRequest('GET',endpoint).then(renderResponse());
			}

	
	


			
