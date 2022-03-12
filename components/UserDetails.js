function UserDetails(props){
    return(
        <div>
            {props.user.name}
            <br/>
            {props.user.email}
        </div>
    )
}

export default UserDetails