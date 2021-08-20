//GET request
			getWords = () => {
				console.log("getting words")
				const xhr = new XMLHttpRequest();
				const url = "https://api.datamuse.com/words?sp=";
				xhr.responseType = 'json';
				
				const query = document.getElementById("input").value;
				const endpoint = url + '*' + query + '*';
				xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE) {
						renderResponse(xhr.response);
					}
				}
				xhr.open('GET',endpoint)
				xhr.send()
			}