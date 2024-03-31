const jokeForm = document.getElementById('jokeForm');
const jokeText = document.getElementById('jokeText');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

 jokeForm.addEventListener('submit', (e) =>  {
   e.preventDefault();

       const firstName = firstNameInput.value || "Stephen";
       const lastName = lastNameInput.value || "Curry";


    //    const url = `https://official-joke-api.appspot.com/random_joke?firstName=${firstName}&lastName=${lastName}`;
    const url = `https://api.chucknorris.io/jokes/random`;

       fetch(url)
       .then(res => {
        return res.json()
       }).then(data => {
          jokeText.innerHTML = (data.value).replaceAll("Chuck Norris", firstName + " " + lastName);
       })
 });


