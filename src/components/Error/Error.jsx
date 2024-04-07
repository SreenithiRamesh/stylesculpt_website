import {useRouteError} from "react-router-dom"
const Error =()=>{
    // const err=useRouteError();
    // console.log(err);
    const{status,statusText}= useRouteError();
    return(
        <>
        
        <p>error page</p>
        <p>statusCode:{status}</p>
        <p>statusText:{statusText}</p>
        </>
    )
}
export default Error