import React,{useState,useEffect} from 'react';
import axios from 'axios'

const HotelList = () => {

    useEffect(()=>{
        const getHotelList = async () =>{
            try{
                const res =await axios.get(
                    "http://localhost:4000/hotelList/"
                )
                console.log(res.data)  
            }catch(error){
                console.log(error.messege)
            }
        }   
        getHotelList()
    })
}

export default HotelList;
