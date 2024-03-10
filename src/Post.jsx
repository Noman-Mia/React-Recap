export default function Post({post}){
 const {id, title, body} = post;
    return(
        <div style={{border:"2px solid red", padding:"20px", margin:"20px", borderRadius:"10px"}}>
            <h3>Title :{title} </h3>
            <p>Id : {id}</p>
            <p>Body : {body}</p>
        </div>
    )
}