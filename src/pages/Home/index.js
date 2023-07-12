import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
const api ="https://us.api.blizzard.com/data/wow/pvp-season/35/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE";

function Home() {
// const [chartData, setChartData] = useState({});
    
    // useEffect(() => {
        
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch(api);
    //           const data = await response.json();
          
    //           // Process the fetched data and format it for the chart
    //           // Assuming the API response is an array
    //           const slicedData = data.entries.slice(0, 300); // Extract the first 300 elements
          
    //           const chartLabels = slicedData.map((item) => item.character.name);
    //           const chartValues = slicedData.map((item) => item.rank);
                  
    //           setChartData({
    //             labels: chartLabels,
    //             datasets: [
    //               {
    //                 label: 'Chart Title',
    //                 data: chartValues,
    //                 fill: false,
    //                 borderColor: 'rgba(75,192,192,1)',
    //               },
    //             ],
    //           });
    //         } catch (error) {
    //           console.log('Error fetching data:', error);
    //         }
    //       };
          
    //     fetchData();
    //   }, []);

    //   console.log(chartData);
    return (
        <div>
            {/* header for homepage */}
            <header className="homeHeader">
           <h1>Ditto </h1>
            <p> World of Warcraft PvP and PvE Guides</p>
            </header>
            <body>
            {/* <div> */}
    {/* <h2>Chart Title</h2>
    <Line data={chartData} />
  </div> */}
            </body>
        </div>
    )
}


export default Home;