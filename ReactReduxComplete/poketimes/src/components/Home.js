import React,{Component} from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

//const Home=()=>{// change func-based component to class based
//becauseFunctional components cannot use lifecycle methods.
// We will call api inside of componentDidMount. So our component will be class based.
class Home extends Component{
    // state={
    //     posts:[]
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>{
    //             console.log(res.data.slice(0,10));
    //             this.setState({
    //                 posts:res.data.slice(0,10)
    //             });
    //         })
    // }
    render(){
        console.log(this.props)
        const {posts}=this.props;//this.state;
        const postList= posts.length ? ( posts.map(post=>{
            return ( 
            <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
                <div className="card-content">
                <Link to={'/posts/'+post.id}>
                    <span className="card-title red-text">
                        {post.title}
                    </span>
                    </Link>
                    <p>{post.body}</p>
                </div>
            </div>   
            )
        }) )
        :
        ( 
        <div className="center">No posts yet!</div> 
        )
    return (
        <div className="home container">
        <h4 className="center">Home</h4>
           {postList}
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Home);