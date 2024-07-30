import React, { useState } from 'react'
import axios from 'axios'
import { MutatingDots } from 'react-loader-spinner'

const Upload = () => {

    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Up file lên cloudinary
    const uploadFile = async () => {
        const data = new FormData();
        data.append("file", img );
        data.append("upload_preset",'images_preset')

        try {
            let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            let resourceType = 'image'
            let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

            const res = await axios.post(api, data);
            const { secure_url } = res.data;
            console.log(secure_url);
            return secure_url;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state
        try {
            setLoading(true);
            //Lấy file.path
            const imgUrl = await uploadFile('image')
            //gửi file.path xuống server
            await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/hotellist/create`, { imgUrl});

            setImg(null);
            console.log("File upload success!");
        } catch (error) {
            setError("File upload failed. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <div>
                    <label htmlFor="img">Image:</label>
                    <br />
                    <input 
                        type="file" 
                        id="img" 
                        onChange={(e) => setImg(e.target.files[0])} 
                    />
                </div>
                <br />
                <button type='submit'>Upload</button>
            </form>

            {loading && 
                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    secondaryColor="#4fa94d"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                />
            }
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}
export default Upload
