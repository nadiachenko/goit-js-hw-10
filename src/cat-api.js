import Notiflix from 'notiflix';


const KEY = 'live_Y4i6k17T2ZTgO1C7IOAKguuc1gQHBAjRQwY8e4x2AhZlbXsNCyDFTTw1CCuM3Skc';



function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${KEY}`)
    .then((response) => {

      if (!response.ok) {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    });

}

function fetchCats() {

  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${KEY}`)
    .then((response) => {

      if (!response.ok) {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    });
}

export { fetchCats, fetchCatByBreed }
