{/* <div class="joke" id="joke">Awesome Jokes Is Loading...</div>
<button class="jkbtn" id="btn">Next Joke</button> */}

// WHAT IS PROMISES?

// you will get 2 condition success or fail.
// Now we will use Fetch API - there is two thing that i will get data ot not.
// Basically we use fetch api instead of htmlhttprequest and fetch api is alternative of 
// XMLHttpRequest so now we will see Fetch Api method.

// we we call fetch api it will return promises which can be fulfilled or reject or Ongoing..

// 90% promise consumed instead of create.

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jkbtn = document.querySelector("#btn");

const generateJokes = () => {

    const setHeaders = {
        headers: {
            Accept : "application/json"
        }
    }

fetch("https://icanhazdadjoke.com/", setHeaders)
.then((res) => res.json() )
.then((data) => {

    jokes.innerHTML = data.joke;

}).catch((error) => {
   console.log(error);
})

}
jkbtn.addEventListener('click', generateJokes);
generateJokes()






