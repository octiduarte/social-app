"use client"
import React, { useState } from 'react'
import {useUser} from "@clerk/nextjs"
const CreatePost = () => {
    const {user} = useUser()
    const [content, setContent] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [showImageUpload, setshowImageUpload] = useState(false)


  return (
    <div>
      CreatePost
    </div>
  )
}

export default CreatePost
