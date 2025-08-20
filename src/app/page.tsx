import Card from './components/Card'
import Counter from './components/Counter'
import Gamelist from './components/Gamelist'

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data.slice(0, 3)
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Counter 
          />
          <Gamelist/>
        <h1>Senaste poster</h1>
        {posts.map((post: any) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.body}
          />
          
        ))}
      
      </main>
    </div>
  );
}