$(document).ready(() => {
  $("#search-form").on("submit", (e) => {
    e.preventDefault();
    let searchText = $("#search-text").val();
    getMovies(searchText);
  });

  function getMovies(searchText) {
    axios
      .get(
        " http://www.omdbapi.com/?i=tt3896198&apikey=a04d1b4a&s=" + searchText
      )
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output = "";

        $.each(movies, (index, movie) => {
          output += `
         <div class="col-md-3">
           <div class="well text-center">
             <img src="${movie.Poster}">
             <h5>${movie.Title}</h5>
             <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
           </div>
         </div>
       `;
        });

        $("#movies").html(output);
      });
  }
});
