import { useRouter } from "next/router";

function SpecificPost (post){
    const router = useRouter();

    //when you are setting fallback as true. Then we will have to create a fallback page
    if (router.isFallback) {
        return(
            <h1>LOADING......</h1>
        )
    }
    return(
        <div>
            {post.post.title}
        </div>
    )
}

export default SpecificPost;


export async function getStaticPaths(){
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await response.json();

    return{
        paths:[
            {
                params:{postId:"1"}
            },
            {
                params:{postId:"2"}
            },
            {
                params:{postId:"3"}
            }
        ],
        fallback:'blocking',
    }
    
}

export async function getStaticProps(context){
    const id = Number(context.params.postId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    // this if condition is added so that in case when fallback is true and user is trying to access the data which api is not supporting then it will show first the fallback page and then the 404 page.
    // if (!data.id) {
    //     return{
    //         notFound:true
    //     }
    // }
    return {
        props:{
            post : data
        }
    }
}



// export async function getStaticPaths(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();

//     const paths = data.map(post=>{
//         return{
//             params:{
//                 postId:`${post.id}`
//             }
//         }
//     })
//     return{
//         paths,
//         fallback:false
//     }
// }