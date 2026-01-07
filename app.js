const movies = [
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: "8.8"
  },
  {
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: "8.6"
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: "9.0"
  },
  {
    title: "Avatar",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNqXhJtH0Q5P0a0X3e5ZxF.jpg",
    rating: "7.9"
  }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  container.innerHTML += `
    <div class="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition">
      <img src="${movie.poster}" class="h-64 w-full object-cover">
      <div class="p-3">
        <h4 class="font-bold">${movie.title}</h4>
        <p class="text-yellow-400">⭐ ${movie.rating}</p>
      </div>
    </div>
  `;
});
