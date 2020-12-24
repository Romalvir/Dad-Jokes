//Grab the Div
const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")


//hook up joke button
jokeBtn.addEventListener("click", generateJoke)

//call a function when HTML loads
generateJoke()

function generateJoke(){
	//variable for the fetch, cleaner look
	const config = {
		headers: {
			"accept": "application/json"
		}
	}

	// make a fetch request to a URL
	fetch("https://icanhazdadjoke.com/", config)
	.then((res) => res.json())
	.then((data) => {
		//now take the joke and insert it in the DOM 
		jokeEl.innerHTML = data.joke
	})
}

//