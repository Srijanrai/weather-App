import React, { useEffect, useState } from 'react'

import './Home.css'
function Home() {

    const YOUR_ACCESS_KEY = "1aa17bc6b1d3a869211a7206c3747fac"
    const [city, setCity] = useState('');
    const [info, setInfo] = useState(null);
    //const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const[found,setFound] = useState(true)
    const handleDetail = () => {
       
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_ACCESS_KEY}&units=metric`)
        .then((res) => res.json())
            .then((data) => {
            if(data.cod !=="404"){
               setInfo(data)
             // console.log(data);
            }
            else {
                alert('Enter valid city')
            }
            })
            .catch((error) => console.log(error))  
           
            
    }

    return (
        <>
            <div className='header'>
                <h1>Weather App</h1>
                <h3>Get weather details of your city</h3>
                <div className='header1'>
                    <input className='input' type="text" placeholder='Your City' value={city} required
                        onChange={(e) => setCity(e.target.value)}>
                    </input>

                    <button className='button' onClick={handleDetail}>Details</button>
                    {info  && (
                        <div className='header3'>
                            <h3>City : {info.name}, {info.sys.country}</h3>
                            <h3>Min Temp : {info.main.temp}</h3>
                            <h3>Max Temp : {info.main.temp_max}</h3>
                            <h3>Humidity : {info.main.humidity}</h3>
                            <h3>Humidity : {info.weather[0].description}</h3>
                        </div>)
                    }
                </div>
            </div>

        </>
    )
}

export default Home
