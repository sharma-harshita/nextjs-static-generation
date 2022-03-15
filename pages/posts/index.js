import Link from "next/link";

function PostList({posts}){
    return(
        <>
            <h1>Post Lists Page</h1>
            {posts.map((value,index)=>{
                return(
                    <div key={index}>
                        <Link href={`/posts/${value.id}`}>
                            <a><h2>{value.title}</h2></a>
                        </Link>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export default PostList

export async function getStaticProps (){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    
    return{
        props:{
            posts:data
        }
    }
}