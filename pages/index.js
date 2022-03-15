import Link from "next/link"

function Home (){
  return(
    <div>
      <h1>HOME PAGE</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  )
}

export default Home