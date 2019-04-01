import { FETCH_POSTS, NEW_POST} from "./rootAction"


 export const fetchPost = () => dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))    
}

export const createPost = (formaData) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(formaData)
    }).then(res => res.json())
      .then(data => dispatch({
          type: NEW_POST,
          payload: data
      }))
}

