const movies = {
  1: {
    title: "Фильм Первый",
    video: "assets/videos/movie1.mp4",
    description: "Описание первого фильма. Жанр, сюжет, год."
  },
  2: {
    title: "Фильм Второй",
    video: "assets/videos/movie2.mp4",
    description: "Описание второго фильма или сериала."
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const movie = movies[id];

if (movie) {
  document.getElementById("title").textContent = movie.title;
  document.getElementById("description").textContent = movie.description;
  document.getElementById("video").innerHTML =
    `<source src="${movie.video}" type="video/mp4">`;
}
