import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const WeatherDetails = ({ weatherData, onBackClick }) => {
  const getDayOfWeek = (timestamp) => {
    const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const date = new Date(timestamp * 1000);
    return daysOfWeek[date.getUTCDay()];
  };

  return (
    <Card className="mt-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-gradient-to-tl from-indigo-800 via-blue-500 to-teal-400 text-white">
      <CardBody>
        <Typography variant="h5" color="white" className="mb-2">
          Previsioni a 3 giorni
        </Typography>
        {weatherData !== null && (
          <div className="mb-3">
            <Typography variant="h5" color="white">
              {getDayOfWeek(weatherData.list[8].dt)} {/* Display the day of the week */}
            </Typography>
            {weatherData.list && weatherData.list[8] && weatherData.list[8].main && (
              <div className="flex items-center gap-10">
                <div>
                  <Typography variant="h6">
                    Max: {weatherData.list[8].main.temp_max.toFixed()}&deg;C
                  </Typography>
                  <Typography variant="h6">
                    Min: {weatherData.list[12].main.temp_min.toFixed()}&deg;C
                  </Typography>
                  {/* Add more information as needed */}
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.list[8].weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                  height={40}
                />
              </div>
            )}

            {weatherData.list && weatherData.list[16] && weatherData.list[16].main && (
              <div className="flex flex-col">
                <Typography variant="h5" color="white">
                  {getDayOfWeek(weatherData.list[16].dt)} {/* Display the day of the week */}
                </Typography>
                <div className="flex items-center gap-10">
                  <div>
                    <Typography variant="h6">
                      Max: {weatherData.list[16].main.temp_max.toFixed()}&deg;C
                    </Typography>
                    <Typography variant="h6">
                      Min: {weatherData.list[20].main.temp_min.toFixed()}&deg;C
                    </Typography>
                    {/* Add more information as needed */}
                  </div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.list[8].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    height={40}
                  />
                </div>
              </div>
            )}

            {weatherData.list && weatherData.list[24] && weatherData.list[24].main && (
              <div className="flex flex-col">
                <Typography variant="h5" color="white">
                  {getDayOfWeek(weatherData.list[24].dt)} {/* Display the day of the week */}
                </Typography>
                <div className="flex items-center gap-10">
                  <div>
                    <Typography variant="h6">
                      Max: {weatherData.list[24].main.temp_max.toFixed()}&deg;C
                    </Typography>
                    <Typography variant="h6">
                      Min: {weatherData.list[28].main.temp_min.toFixed()}&deg;C
                    </Typography>
                    {/* Add more information as needed */}
                  </div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.list[8].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    height={40}
                  />
                </div>
              </div>
            )}

          </div>
        )}



      </CardBody>

      <CardFooter className="pt-0">
        <Button size="sm" variant="text" color="white" onClick={onBackClick} className="flex items-center gap-2">
          Torna
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WeatherDetails;





