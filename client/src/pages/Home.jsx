import React from 'react'
import AddUserModal from '../components/addUserModal'
import Post from "../components/Post"
import User from '../components/User'
import AddPostModal from '../components/AddPostModal'

const Home = () => {
  return (
    <div className="container">
        <AddPostModal />
        <Post />
        <AddUserModal />
        <User />
    </div>
  )
}

export default Home