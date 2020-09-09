import React, { Component } from 'react'
import UserPostCard from "./UserPostCard"
import { Card } from 'semantic-ui-react'
import FriendshipCard from './FriendshipCard'
import AllPostsCard from "./AllPostsCard"
import MessageCard from "./MessageCard"
import CommunityMembers from "./CommunityMembers"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import "./UserHome.css"
import FriendContainer from "./FriendContainer"

const UsersUrl = "http://localhost:3000/api/v1/users"
const urlPost = "http://localhost:3000/api/v1/posts/"
const urlFriendship = "http://localhost:3000/api/v1/friendships"
const urlMessage = "http://localhost:3000/api/v1/messages/"
const urlAllPost = "http://localhost:3000/api/v1/posts"

export default class UserHome extends Component {
    state = {
        // currentUser:{
        //     // posts:[],
        //     friends: [],
        //     comments: []
        // },
        // posts:[],
        // // listOfFriends:[],
        // // postComments:[],
        // comments: [],
        // editPostContent:"",
        // currentPostId: 0,  ==>> , friends:[] to be inserted in currentUser next to post
        currentUser:{posts:[]},
        posts:[],
        listOfFriends:[],
        postComments:[],
        editPostContent:"",
        currentPostId: 0,
        comMembers: []
    }

    
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`) //${localStorage.userID}
        .then(resp => resp.json())
        .then(user => { 
            this.setState({
                currentUser: user
            })
        })    
    }

    handlePostSubmit = (event) =>{
        event.preventDefault()
        // console.log(event.target[0].value)
        let newPost = event.target[0].value
        fetch(urlPost, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                user_id: localStorage.userID,
                description: newPost
            })
        })
        .then(resp => resp.json())
        .then(newPost => this.setState({
            currentUser: {
                ...this.state.currentUser,
                posts: [...this.state.currentUser.posts, newPost]
            } 
        }))
        event.target.reset()
    }

    handleUserFriendship = () => {
        if(this.state.listOfFriends.length > 0){
            this.setState({
                listOfFriends: []
            })
        }
        else{
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`) //${localStorage.userID}
        .then(reps => reps.json())
        .then(userData => this.setState({
            listOfFriends: userData.friends
        }))}  
    }
   
    handleAllPost = () =>{
        if(this.state.posts.length > 0){
            this.setState({
                posts: []
        })
    }else{
            // console.log("All posts")
            fetch(urlAllPost)
            .then(resp => resp.json())
            .then(posts => this.setState({
                posts,  
             }) )
        }
    }
    /*
    posts => 
        console.log(posts[2].comments[0].content)
    */


    handlePostDelete = (postId) =>{
        // console.log(postId)
        let updatedPosts = this.state.currentUser.posts.filter( post => post.id !==postId)
        // console.log('I have been deleted')
        fetch(urlPost+postId, {method:"DELETE"})
        this.setState({
            currentUser: {
                ...this.state.currentUser,
                posts: updatedPosts
            }
        })
    }

    handlePostEdit = (e) => {
        e.preventDefault();
        
        // console.log(e.target.textarea.value)
        // console.log("Enter submit form")
        let postId = this.state.currentPostId

        fetch(`${urlPost}${this.state.currentPostId}`, {
            method: "PATCH",
            headers:{
                "Content-type": "Application/json",
                "Accepts": "Application/json"
            },
            body: JSON.stringify({
                description: this.state.editPostContent
            })
        })
        .then(resp => resp.json())
        .then(editedPost => this.setState({
            currentUser: {
                ...this.state.currentUser,
                posts: [...this.state.currentUser.posts.map(post => post.id !== editedPost.id ? post : editedPost)]
            },
            editPostContent:""
        }))
        e.target.reset()
    }

    handleDisplayPostTobeEdited = (post) =>{
        this.setState({
            ...this.state,
            editPostContent: post.description,
            currentPostId: post.id
        })
    }


    showPostComment = (postId) =>{
        console.log(postId)
        fetch(urlPost+postId)
        .then(resp => resp.json())
        .then(post => this.setState({
            postComments: post.comments
        }))
    }

    makeNewComment = (postId)=>{
        console.log("Make a new Commment")
        console.log(postId)
    }
    // handleUserMessage = () =>{
    //     // console.log('Messages!!!!')
    //     fetch('https://data.montgomerycountymd.gov/resource/weic-kzbi.json')
    //     .then(resp => resp.json())
    //     .then(console.log)
    // }

    handleComMembers = () =>{
        if(this.state.comMembers.length > 0){
            this.setState({
                comMembers: []
        })
    } else{
        fetch(UsersUrl)
        .then(reps => reps.json())
        .then(membersList =>  
            this.setState({
            comMembers: membersList
        })) 

    }
    }

    addFriend = (event, friend) => {
        event.preventDefault()
        fetch('http://localhost:3000/api/v1/friendships', {
            method: "POST",
            headers:{
                "Content-type": "Application/json",
                "Accepts": "Application/json"
            },
            body: JSON.stringify({friendship: {
                user_id: this.state.currentUser.id,
                friend_id: friend.id
            }})
        })
        .then(resp => resp.json())
        .then(data => this.setState({
            listOfFriends: [...this.state.listOfFriends, friend]
        })  )
    }
    
    sendMessage = (event, message, member) => {
        event.preventDefault()
        console.log(event, message)
        //fetch POST to messagesURL sender_id:this.state.currentUser.id, receiver_id: member.id, content: message.content
    }


    render() {

        
        return (
            <React.Fragment >
            <div className="user-homepage">
                <h1>Welcome: {this.state.currentUser.username}</h1>
        
                <h2>Make a new post</h2>
                <div className="user-homepage-form1">
                    <form onSubmit={(event) => this.handlePostSubmit(event)}>
                    <textarea type="text_area" placeholder="Post here" name="post" type="text" rows="3"></textarea>
                    <button class="ui green button" type="submit">Submit your post</button>
                    </form>
                </div>
                
                </div>
                     <form onSubmit={(e) => this.handlePostEdit(e)}>
                     <textarea name="textarea" type="text_area" type="text" rows="3" value={this.state.editPostContent} 
                      onChange={(e) => this.setState({...this.state, editPostContent: e.target.value})} > 
                     </textarea>  
                     <button class="ui green button" type="submit" >Submit</button>   
                    </form> 
                <div>
    
                <Card.Group itemsPerRow={6}>
                <div className="user-post">
                    <h2>Your Posts</h2>
                    {this.state.currentUser.posts.map((post) => 
                    <UserPostCard
                     handleDelete={this.handlePostDelete} 
                     handleDisplayPostTobeEdited={this.handleDisplayPostTobeEdited}
                     key={post.id} 
                     post ={post}
                     showPostComment={this.showPostComment}/>)} 
                    <h2 onClick={this.handleUserMessage}>Message</h2>
                </div>
                </Card.Group>

                <div className="user-list-of-friends">
                    {/* <h2 onClick={this.handleUserFriendship}>List of Friends</h2> */}
                    {/* {this.state.listOfFriends.length > 0 ? this.state.listOfFriends.map(friend => 
                    <FriendshipCard friend={friend} key={friend.id}/>) : "You have no friends right now" } */}
                </div>
                
                <div className="ui vertical segment compact raised segments">
                    <div className="ui segment inverted">
                    <h2 onClick={this.handleUserFriendship} >List of friends</h2>
                    </div>
                    <div className='ui vertical segment'>
                    <FriendContainer listOfFriends={this.state.listOfFriends}/>
                    </div>
                </div>


                <div className="ui vertical segment compact raised segments">
                    <div className="ui segment inverted">   
                    <h2 onClick={this.handleComMembers}>Community Members </h2>
                    { this.state.comMembers.map(member => <CommunityMembers member={member} addFriend={this.addFriend}/> )}
                    </div>
                </div> 

                <div className="ui vertical segment compact raised segments">
                    <div className="ui segment inverted"> 
                    <h2 onClick={this.handleAllPost}>All Posts</h2>
                    {this.state.posts.map(post => 
                    <AllPostsCard post={post} 
                    key={post.id} 
                    postId={post.id} 
                    showPostComment={this.showPostComment} 
                    makeNewComment ={this.makeNewComment}/>) }
                    </div>
                </div>
            </div>

           
            {/* <div className="ui vertical segment compact raised segments">
                <div className="ui segment inverted">
                <h2>Welcome home, {this.state.currentUser.username}</h2>
                </div>
                <div className='ui vertical segment'>
                <FriendContainer listOfFriends={this.state.listOfFriends}/>
                </div>
            </div> */}


          </React.Fragment>
        )
    }
}



 
