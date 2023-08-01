import MovieItem from '@/components/MovieItem'
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  console.log(`API Key: ${process.env.API_KEY}`)
  console.log(res)

  return (
    <main className='container mx-auto pt-5'>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {res.results?.map((item: any) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}
