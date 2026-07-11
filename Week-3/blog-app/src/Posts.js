import React from "react";
import Post from "./Post";

class Posts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data=>{
            const fetchedPosts = data.map(item=> new Post(item.id, item.title, item.body));
            this.setState({posts: fetchedPosts});
        })
        .catch(error =>{
            console.error("Error fetching data: ", error);
        });
    }
    componentDidMount(){
        this.loadPosts();
    }
    componentDidCatch(error, info){
        alert(`An error occured: ${error.toString()}\nComponent Stack: ${info.componentStack}`);
    }
    render(){
        return(
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post =>(
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;