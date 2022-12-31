import React,{ useState, useEffect} from 'react';
import  Axios  from 'axios';



const API_URL="https://us.api.blizzard.com/data/wow/pvp-season/34/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=US3udjZxUNup7cG9tdC8DiyXCHB3xp1pZc";
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e62a8500b88c9a431caf5c5d9c7a7674&query";
const Ladder = () => {

  const [ladders, setLadder] = useState([]);
    useEffect(() => {
      getLadder();
  }, []);
  
const getLadder = async () => {
try {
      const res = await Axios.get(API_URL);
      
      setLadder(res.data.entries);
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(ladders);
        return (
      <div> 
      
        
      <table>
    
         
            <thead>
              <tr>
              <th>Rank</th>
              <th> Class </th>
              <th>Faction</th>
              <th>Name</th>
              <th>Guild</th>
              <th>Realm</th>
              <th>W/L</th>
              <th>Rating</th>
              </tr>
              </thead>
            {ladders.map((ladder) => 
              <tbody key={ladder.character.id}>
                <tr>
                  <td>{ladder.rank}</td>
                  <td>/</td>
                  <td>{ladder.faction.type}</td>
                  <td>{ladder.character.name}</td>
                  <td>/</td>
                  <td>{ladder.character.realm.slug}</td>
                  <td>{ladder.season_match_statistics.won} / {ladder.season_match_statistics.lost}</td>
                  <td>{ladder.rating}</td>
                </tr>
              </tbody>
           )}
            
            

        </table>
       
      </div>
      );}

export default Ladder; 