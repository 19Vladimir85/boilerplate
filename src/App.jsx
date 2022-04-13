import React, {useState, useEffect} from "react";
import Button from "./components/button";
import PostList from "./components/PostList";
import { getAllPosts, getUser, updateLike, deletePost as deletePostApi } from "./api";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./components/User";

const App = () => {
    const [posts, setPosts] = useState()
     const [user, setUser] = useState()
     useEffect(()=>{
         Promise.all([getUser(), getAllPosts()]).then(([user, posts])=>{
             setUser(user);
            setPosts(posts)
        })
        },[]) 
     const updateLikeStatus = (isLiked, id) => {
         updateLike(isLiked, id).then(newPost=>{
             const newPosts = posts.map(post=>(post._id===newPost._id? newPost: post));
             setPosts(newPosts)
         })
         
     }

     const deletePost = (id) =>{
       deletePostApi(id).then(()=>getAllPosts().then((data)=>setPosts(data))) 
     }

    return <>
    <Header>
    <div className="block">
      <div className="logo">
      <a href="/">Remix</a>
      </div>
      <ul className="nav">
        <li><a href="/">Home</a></li>
        <li><a href="https://remix.run/docs">Remix Docs</a></li>
        <li><a href="https://github.com/remix-run/remix">GitHub</a></li>
      </ul>
    </div>
    </Header>
    <Body>
        {user?<User avatar={user.avatar} email={user.email} name={user.name} about={user.about} /> : <></>}
        <div className="about">
        <h2>Welcome to Our Image Board!</h2>
        <p>We're stoked that you're here. 🥳</p>
        </div>
    <Button className="button" onClick={()=>{
        console.log("Есть контакт")
    }} text={"Create post"}> 
    </Button><PostList data={posts? posts:[] } user={user} updateLikeStatus={updateLikeStatus} deletePost={deletePost} >
        </PostList> 
      </Body>
      <Footer>
          <div className="footer">
          <p>© You!</p>
          </div>
      </Footer>
      </>;
    };
    
    export default App;