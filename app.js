const movies = [
  {
    id: 1,
    title: "Фильм Первый",
    year: 2024,
    poster: "assets/images/poster1.jpg"
  },
  {
    id: 2,
    title: "Фильм Второй",
    year: 2023,
    poster: "assets/images/poster2.jpg"
  }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  container.innerHTML += `
    <a href="movie.html?id=${movie.id}"
       class="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition block">
      <img src="${movie.poster}" class="h-64 w-full object-cover">
      <div class="p-3">
        <h4 class="font-semibold">${movie.title}</h4>
        <p class="text-sm text-gray-400">${movie.year}</p>
      </div>
    </a>
  `;
});
