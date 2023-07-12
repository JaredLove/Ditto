import React from "react";
  // const dk = "Death Knight" + "https://wow.zamimg.com/images/wow/icons/large/classicon_deathknight.jpg";
  // const dh =   "Demon Hunter" + "https://wow.zamimg.com/images/wow/icons/large/classicon_demonhunter.jpg";
  // const druid =  "Druid" + "https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg";
  // const hunter =  "Hunter" + "https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg";
  // const mage =  "Mage" + "https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg";
  // const monk =  "Monk" + "https://wow.zamimg.com/images/wow/icons/large/classicon_monk.jpg";
  // const paladin =  "Paladin" + "https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg";
  // const priest =  "Priest" + "https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg";
  // const rogue =  "Rogue" + "https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg";
  // const shaman =  "Shaman" + "https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg";
  // const warlock =  "Warlock" + "https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg";
  // const warrior =  "Warrior" + "https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg";
  // const demonhunter =  "Demon Hunter" + "https://wow.zamimg.com/images/wow/icons/large/classicon_demonhunter.jpg";

const Names = ({ ladders, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }else 
      
        

    
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
            {ladders.map((ladder, index) => 
              <tbody key={index} className="tBody">
                
                <tr>
                  <td>{ladder.rank}</td>
                  
                
                  <td>{ladder.tier.key.href}</td>
                  <td>{ladder.faction.type === "HORDE" ? (
                    <img src="https://wow.zamimg.com/images/icons/horde.png" alt="Horde" />
                  ) : (
                    <img src="https://wow.zamimg.com/images/icons/alliance.png" alt="Alliance" />
                  )} </td>
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