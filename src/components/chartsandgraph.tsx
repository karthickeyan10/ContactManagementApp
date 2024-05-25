import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Chart from 'chart.js/auto';
import { useQuery } from 'react-query';
//React Query is used to fetch and cache data from APIs
import '../Styles/styles.css';
// Define TypeScript interfaces for the data structures
//WorldData,CountryData,GraphData
interface WorldData {
  cases: number;
  deaths: number;
  recovered: number;
}

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
}

interface GraphData {
  cases: { [date: string]: number };
}
// Fetching function to get data from a given URL
const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) //respone not ok it will throw exception
    {
    throw new Error('Network response was not ok');
  }
  return response.json(); 
}; 

const Dashboard: React.FC = () => {
  // Fetch global COVID-19 statistics
  const { data: worldData } = useQuery<WorldData>('worldData', () => fetchData('https://disease.sh/v3/covid-19/all'));
  // Fetch country-specific COVID-19 statistics
  const { data: countryData, isLoading } = useQuery<CountryData[]>('countryData', () =>
    fetchData('https://disease.sh/v3/covid-19/countries')
  );  
  // Fetch historical COVID-19 data for creating a line graph
  const { data: graphData } = useQuery<GraphData>('graphData', () =>
    fetchData('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
  );
// UseEffect to create and update the line chart when graphData changes
  useEffect(() => {
    if (graphData && Object.keys(graphData).length > 0) {
      const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
      const existingChart = Chart.getChart(ctx);
      // Destroy the existing chart if it exists to avoid duplication
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Object.keys(graphData.cases),
          datasets: [
            {
              label: 'Cases',
              data: Object.values(graphData.cases),
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
          ],
        },
      });
    }
  }, [graphData]);

  return (
    <>
    <h1 className="text-4xl font-bold contactheader">Charts and graphs Page</h1>
    <div className="dashboard-container">
      <header className="header">
        <h1 className="text-4xl font-bold">Global COVID-19 Dashboard</h1>
      </header>
      {/* Display worldwide COVID-19 statistics */}
      <div className="worldwide-cases">
        <h2>Worldwide Cases</h2>
        <p>Total Cases: {worldData?.cases}</p>
        <p>Total Deaths: {worldData?.deaths}</p>
        <p>Total Recovered: {worldData?.recovered}</p>
      </div>
      {/* Display line graph for historical COVID-19 cases */}
      <div className="line-graph">
        <h2>Line Graph Showing Cases Fluctuations</h2>
        <canvas id="lineChart"></canvas>
      </div>
      {/* Display country-wise COVID-19 statistics */}
      <h2>Country-wise Cases (Scroll at last to see map with country wise)</h2>
      <div className="country-data-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          countryData?.map((country) => (
            <div className="country-data" key={country.country}>
              <h3>{country.country}</h3>
              <img
                src={country.countryInfo.flag}
                alt={`Flag of ${country.country}`}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Error loading flag image:', e)}
              />
              <p>Total Cases: {country.cases}</p>
              <p>Total Deaths: {country.deaths}</p>
              <p>Total Recovered: {country.recovered}</p>
            </div>
          ))
        )}
      </div>
      {/* Display map with markers for each country's COVID-19 data */}
      <h2>Map Showing Country-wise Cases</h2>
      <div className="map-container">
        <MapContainer center={[0, 0] as [number, number]}  zoom={2} className="leaflet-map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countryData?.map((country) => (
            <Marker position={[country.countryInfo.lat, country.countryInfo.long]} key={country.country}>
              <Popup>
                <div className="aa">
                  <h3>{country.country}</h3>
                  {/* image */}
                  <img
                    src={country.countryInfo.flag}
                    alt={`Flag of ${country.country}`}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Error loading flag image:', e)}
                  />
                  <p>Total Cases: {country.cases}</p>
                  <p>Total Deaths: {country.deaths}</p>
                  <p>Total Recovered: {country.recovered}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
