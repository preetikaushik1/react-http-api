import React from  'react'
import axios from 'axios'
import post from './post.jpg'

class Apiclass extends React.Component{

    state = {
        commentsList : []
    }


    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/comments').then((result) => {
           
          let commentsList = result.data 
          console.log('commentsList', commentsList) 
          this.setState({commentsList})
        })
    }

    render(){
        return(
            <>
            <div className='outerbox'>
                <div className='post'>Posts</div>
                <div className='profile-box'>
                    <img src={post} alt='post'className='profile'/>
                    <span className='dev'>the_developer@123</span>
                </div>
                <div className='img-box'>
                    <img src ={post} alt='post' className='img'/>
                </div>
                <div className='comment-textbox'>
                <div className='recent-text'>Recent comments</div>
                <div className='latest-text'>Latest Comments Section by Users</div>
                </div>
                {
                    this.state.commentsList.map(Comment =>
                        <div className='comment-box' key ={Comment.id}>
                        <div className='name'>{Comment.name}</div>
                        <div className='mail'> {Comment.email}</div>
                        <div className='body'>Comment :- {Comment.body}</div>
                        
                        </div>
                        )
                }
            </div>
            </>
        )
    }
}

export default Apiclass