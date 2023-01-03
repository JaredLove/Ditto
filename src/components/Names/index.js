import React from "react";



const Names = ({ ladders, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="div">
    <table className="ladderTable">
    
         
            <thead className="tHeader">
              <tr>
              <th>Rank</th>             
              <th>Class</th>
              <th>Faction</th>
              <th>Name</th>
              <th>Realm</th>
              <th>W/L/%</th>
              <th>Rating</th>
              </tr>
              </thead>
            {ladders.map((ladder) => 
              <tbody key={ladder.character.id} className="tBody">
                
                <tr>
                  <td>{ladder.rank}</td>
                  <td>Test</td>
                  <td>{ladder.faction.type}</td>
                  <td>{ladder.character.name}</td>
                  <td>{ladder.character.realm.slug}</td>
                  <td>{ladder.season_match_statistics.won}/{ladder.season_match_statistics.lost}/{Math.trunc(ladder.season_match_statistics.won / ladder.season_match_statistics.played * 100)}%</td>
                  <td>{ladder.rating}</td>
                </tr>
              </tbody>
           )}
            
            

        </table>
        
        </div>
        )
    
}

export default Names;