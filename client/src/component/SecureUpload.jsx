import React, { useState } from 'react'
import axios from 'axios'
import {MutatingDots} from 'react-loader-spinner'

export const SecureUpload = () => {

    const [img,setImg] = useState(null);
    const [video,setVideo] = useState(null);
    const [loading,setLoading] = useState(false);

    const uploadFile = async(type,timestamp,signature)=> {
        const data = new FormData();
        data.append("file",type === 'image' ? img : video)
        data.append("timestamp",timestamp)
        data.append("signature",signature)
        data.append("api_key",process.env.REACT_APP_CLOUDINARY_API_KEY)

        try{
            let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            let resourType = type === 'image'?'image':'video'
            let api =  `https://api.cloudinary.com/v1_1/${cloudName}/${resourType}/upload`

            const res = await axios.post(api,data);
            const {secure_url} = res.data;
            console.log(secure_url)
            return secure_url
        }catch(error){
            console.error(error)
        }
    }

    const getSignatureForUpload = async (folder) =>{
        try{
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/api/sign-upload`,{folder})
            return res.data
        }catch(error){
            console.error(error)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);

            const {timestamp: imgTimestamp, signature: imgSignature } = await getSignatureForUpload('images')

            const {timestamp: videoTimestamp, signature: videoSignature } = await getSignatureForUpload('videos')
            
            const imgUrl = await uploadFile('image', imgTimestamp,imgSignature)

            const videoUrl = await uploadFile('video',videoTimestamp,videoSignature)

            await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/api/videos`,[imgUrl,videoUrl])
            
            setImg(null)
            setVideo(null)
            
            console.log("File upload success!")
            setLoading(false)
        }catch(error){
            console.error(error)
        } 

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="video">Video:</label>
            <br/>
            <input 
                type="file"
                accept="video/*"
                id="video"
                onChange={(e) => setVideo((prev) => e.target.files[0])}
            />
        </div>
        <br />
        <div>
            <label htmlFor="img">Image:</label>
            <br/>
            <input 
                type="file"
                accept="image/*"
                id="img"
                onChange={(e) => setImg((prev) => e.target.files[0])}
            />
        </div>
        <br />
        <button type='submit'>Upload</button>
    </form>

    {loading && <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />}
    </div>
  )
}
