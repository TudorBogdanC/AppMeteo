// WeatherCard.js
import React, { useState, useEffect } from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import WeatherDetails from './WeatherDetails';
import { Card, CardBody, CardFooter, Typography, Button, Input } from "@material-tailwind/react";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromLocation = async () => {
      try {
        setLoading(true);

        let apiUrl;

        if (location) {
          apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it`;
        }

        if (apiUrl) {
          const response = await fetch(apiUrl);
          const data = await response.json();

          if (data.cod && data.cod !== "200") {
            setError(`Error: ${data.message}`);
            setWeatherData(null);
          } else {
            setError(null);
            setWeatherData(data);
          }
        }
      } catch (error) {
        console.error('Errore nel recupero del meteo:', error);
        setError('Errore nel recupero del meteo. Per favore riprova.');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      fetchDataFromLocation();
    }
  }, [location]);

  const handleSearchCitySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it`);
      const data = await response.json();

      if (data.cod && data.cod !== "200") {
        setError(`Error: ${data.message}`);
        setWeatherData(null);
      } else {
        setError(null);
        setWeatherData(data);
        setLocation(null);
      }
    } catch (error) {
      console.error('Errore nel recupero del meteo:', error);
      setError('Errore nel recupero del meteo. Per favore riprova.');
    }
  };

  const handleGeolocationClick = () => {
    if (navigator.geolocation) {
      setLoading(true);

      const successCallback = async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          await setLocation({ latitude, longitude });
          setSearchCity('');
        } catch (error) {
          console.error('Errore recupero della posizione:', error);
          setError('Errore recupero della posizione. Per favore riprova.');
        } finally {
          setLoading(false);
        }
      };

      const errorCallback = (error) => {
        console.error('Errore recupero della posizione:', error);
        setError('Errore recupero della posizione. Per favore riprova.');
        setLoading(false);
      };

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options
      );
    } else {
      console.error('Recupero della posizione geografica non supportato in questo browser.');
      setLoading(false);
    }
  };

  const handleSearchCityChange = (e) => {
    setSearchCity(e.target.value);
  };

  return (
      <Routes>
        <Route path="/" element={<Home weatherData={weatherData} loading={loading} error={error} handleSearchCitySubmit={handleSearchCitySubmit} handleGeolocationClick={handleGeolocationClick} handleSearchCityChange={handleSearchCityChange} />} />
        <Route path="/details" element={<WeatherDetails weatherData={weatherData} onBackClick={() => window.history.back()} />} />
      </Routes>
  );
};

const Home = ({ weatherData, loading, error, handleSearchCitySubmit, handleGeolocationClick, handleSearchCityChange }) => (
  <Card className="mt-6 w-80 sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-gradient-to-tl from-indigo-800 via-blue-500 to-teal-400">
    <CardBody>
      <Typography variant="h5" color="white" className="mb-2">
        {weatherData?.city?.name && (
          <div className="flex justify-between items-center gap-10">
            <span>{weatherData.city.name}</span>
            <div className="flex flex-col items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.list[0]?.weather[0]?.icon}@2x.png`}
                alt="Weather Icon"
                height={120}
              />
              <Typography variant="h6">{weatherData.list[0]?.weather[0].description}</Typography>
              
            </div>
          </div>
        )}
        {!weatherData?.city?.name && 'Scopri il meteo nella tua città'}
      </Typography>



      {weatherData?.list && (
        <div className="text-white">
          <p> Temperatura attuale: {weatherData.list[0]?.main?.temp.toFixed()}&deg; C</p>
          <p> Min / Max: {weatherData.list[0]?.main?.temp_min.toFixed()}&deg; C / {weatherData.list[0]?.main?.temp_max.toFixed()}&deg; C</p>
          {/* You can add more details from the weatherData as needed */}
        </div>
      )}
      <form onSubmit={handleSearchCitySubmit} className="mb-4 mt-4">
        <Input
          label="La tua città"
          type="text"
          color="white"
          placeholder="Cerca..."
          onChange={handleSearchCityChange}
          className="mb-2"
        />
        <Button
          size="sm"
          variant="gradient"
          color="teal"
          onClick={handleGeolocationClick}
          className="mr-2 mt-5"
        >
          Usa la mia posizione
        </Button>
        <Button
          size="sm"
          type="submit"
          variant="gradient"
          color="indigo"
          className="mr-2 mt-5"
        >
          Cerca
        </Button>
      </form>
      {loading && <p>In caricamento...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <Link to="/details">
          <Button size="sm" variant="text" color="white" className="flex items-center gap-2">
            Previsioni a 3 giorni
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      )}
    </CardBody>
    <CardFooter className="pt-0">
      {/* Your existing More button with SVG */}
    </CardFooter>
  </Card>
);

export default WeatherCard;














