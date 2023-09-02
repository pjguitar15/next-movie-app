import HomepageMovies from '@/components/HomepageMovies'
import MovieItem from '@/components/MovieItem'
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  console.log(res)
  // console.log(res)

  return (
    <main className='container mx-auto pt-5'>
      <HomepageMovies data={res.results} />
    </main>
  )
}
