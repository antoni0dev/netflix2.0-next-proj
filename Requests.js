const key = process.env.NEXT_PUBLIC_IMDB_API_KEY

const requests = [
    {
      title: 'Popular',
      fetchURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    },
    {
      title: 'Top Rated',
      fetchURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
    },
    {
      title: 'Trending',
      fetchURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`
    },
    {
      title: 'Horror',
      fetchURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`
    },
    {
      title: 'Upcoming',
      fetchURL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
    },
];

  export default requests