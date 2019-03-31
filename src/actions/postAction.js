import { FETCH_POSTS, NEW_POST} from "./rootAction"


 const fetchPost = () => dispatch => {
     console.log("fetching")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))    
}

export default fetchPost