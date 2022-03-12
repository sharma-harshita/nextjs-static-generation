import UserDetails from "../components/UserDetails";

function User ({users}){

    return(
      <div>
        <h1>User PAGE</h1>
        {users.map((value, index)=>{
            return(
                <div key={index}>
                    <UserDetails user={value}/>
                </div>
            )
        })}
      </div>
    )
  }
  
export default User

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return{
        props:{
            users : data
        }
    }
}