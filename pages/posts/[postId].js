function SpecificPost (post){
    return(
        <div>
            {post.post.title}
        </div>
    )
}

export default SpecificPost;


export async function getStaticPaths(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map(post=>{
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const id = Number(context.params.postId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return {
        props:{
            post : data
        }
    }
}