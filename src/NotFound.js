import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>The page cannot be found<br/><br/></p>
            <Link to="/">Back to the site..</Link>
        </div>
     );
}
 
export default NotFound;