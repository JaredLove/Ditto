// import React,{ useState, useEffect} from 'react';
// // {"access_token":"USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE","token_type":"bearer","expires_in":86399,"sub":"cfce05de1681447b8d74bc11e324c112"}

// // const API_URL="https://us.api.blizzard.com/data/wow/pvp-season/35/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE";

// function Ladder() {
//   const [firstData, setFirstData] = useState([]);
//   const [secondData, setSecondData] = useState([]);
//   const [combinedData, setCombinedData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // First API call to retrieve data
//         const firstResponse = await fetch('https://us.api.blizzard.com/data/wow/pvp-season/35/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE');
//         const firstData = await firstResponse.json();
//         setFirstData(firstData.entries.slice(0, 100));
//         // console.log(firstData.entries[1].character.name);
//         // Extract necessary data from the first API response
//         const secondPromises = [];
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         for (let i = startIndex; i < endIndex && i < firstData.length; i++) {
//           const item = firstData.entries[i];
//         const stringData = item.character.name;
//         const stringData2 = stringData.toLowerCase();

//         const idData = item.character.realm.slug;

//         // Second API call using data from the first API
//         const promise = fetch(`https://us.api.blizzard.com/profile/wow/character/${idData}/${stringData2}/appearance?namespace=profile-us&locale=en_US&access_token=USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE`
//         ).then(response => response.json());
//         secondPromises.push(promise);
//         }
//         const secondResponses = await Promise.all(secondPromises);
//         setSecondData(secondResponses);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, [currentPage]);

//   useEffect(() => {
//     // Combine firstData and secondData when they both have data
//     if (firstData.length > 0 && secondData.length > 0) {
//       const combined = [];
//       for (let i = 0; i < Math.min(firstData.length, secondData.length); i++) {
//         const combinedItem = {
//           ...firstData[i],
//           ...secondData[i]
//         };
//         combined.push(combinedItem);
//       }
//       setCombinedData(combined);
      
//     }
//   }, [firstData, secondData]);

//   const totalPages = Math.ceil(firstData.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   console.log(combinedData);
//   return (
//     <div>
//       <h1>Leaderboard</h1> 
//       <div>
//         {combinedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
//           <table key={index} className="ladderTable">
//             <tbody>
//               <tr>
//                 <th>Rank</th>
//                 <th>Name</th>
//                 <th>Info</th>
//                 <th>Realm</th>
//                 <th>Rating</th>
//                 <th>Wins</th>
//               </tr>
           
//               <tr>
//                 <td>{item.rank}</td>
//                 <td>{item.character.name}</td>
//                 <td>
//                 {item.faction.type === "HORDE" ? (
//                     <img src="https://wow.zamimg.com/images/icons/horde.png" alt="Horde" />
//                   ) : (
//                     <img src="https://wow.zamimg.com/images/icons/alliance.png" alt="Alliance" />
//                   )}

//                       {item.playable_class.name === "Warrior" ? (
//                         <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg" alt="Warrior" />
//                       ) : item.playable_class.name === "Paladin" ? (
//                         <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg" alt="Paladin" />
//                       ) : item.playable_class.name === "Hunter" ? (
//                         <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg" alt="Hunter" />
//                       ) : item.playable_class.name === "Rogue" ? (
//                         <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg" alt="Rogue" />
//                       ) : item.playable_class.name === "Priest" ? (
//                         <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg" alt="Priest" />
//                       ) : item.playable_class.name === "Death Knight" ? (
//                         <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_deathknight.jpg" alt="Death Knight" />
//                       ) : item.playable_class.name === "Shaman" ? (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg" alt="Shaman" />
//                         ) : item.playable_class.name === "Mage" ? (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg" alt="Mage" />
//                         ) : item.playable_class.name === "Warlock" ? (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg" alt="Warlock" />
//                         ) : item.playable_class.name === "Monk" ? (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_monk.jpg" alt="Monk" />
//                         ) : item.playable_class.name === "Druid" ? (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg" alt="Druid" />
//                         ) : item.playable_class.name === "Demon Hunter" ? (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_demonhunter.jpg" alt="Demon Hunter" />
//                         ) : (
//                           <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg" alt="Unknown" />
//                         )}{item.playable_race.name === "Human" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
//                   ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human female'/>
//                   ): item.playable_race.name === "Dwarf" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='dwarf male'/>
//                   ): item.playable_race.name === "Dwarf" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='dwarf female'/>

//                   ): item.playable_race.name === "Nightelf" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='nightelf male'/>
//                   ): item.playable_race.name === "Nightelf" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='nightelf female'/>
//                   ): item.playable_race.name === "Gnome" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='gnome male'/>
//                   ): item.playable_race.name === "Gnome" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='gnome female'/>
//                   ): item.playable_race.name === "Draenei" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='draenei male'/>
//                   ): item.playable_race.name === "Draenei" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='draenei female'/>
//                   ): item.playable_race.name === "Worgan" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='worgan male'/>
//                   ): item.playable_race.name === "Worgan" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='worgen female'/>
//                   ): item.playable_race.name === "Pandaren" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren male'/>
//                   ): item.playable_race.name === "Pandaren" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren female'/>
//                   ): item.playable_race.name === "Dracthyr" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='Dracthyr male'/>
//                   ): item.playable_race.name === "Orc" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='orc male'/>
//                   ): item.playable_race.name === "Orc" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='orc female'/>
//                   ): item.playable_race.name === "Undead" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='undead male'/>
//                   ): item.playable_race.name === "Undead" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='undead female'/>
//                   ): item.playable_race.name === "Troll" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='troll male'/>
//                   ): item.playable_race.name === "Troll" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='troll female'/>
//                   ): item.playable_race.name === "Bloodelf" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='bloodelf male'/>
//                   ): item.playable_race.name === "Bloodelf" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='bloodelf female'/>
//                   ): item.playable_race.name === "Globlin" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='globin male'/>
//                   ): item.playable_race.name === "Globlin" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='globin female'/>
//                   ): item.playable_race.name === "Pandaren" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren male'/>
//                   ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren female'/>
//                   ): item.playable_race.name === "Dracthyr" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='dracthyr female'/>
//                   ): item.playable_race.name === "Human" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
//                   ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
//                   ): item.playable_race.name === "Human" && item.gender.type === "MALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
//                   ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>

//                   ) : (
//                   <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg" alt="Unknown" />


//                   )}   
//                   </td>
//                 <td>{item.character.realm.slug}</td>
//                 <td>{item.rating}</td>
//                 <td>{item.season_match_statistics.won}/{item.season_match_statistics.lost}/{Math.trunc(item.season_match_statistics.won / item.season_match_statistics.played * 100)}%</td>

//               </tr>
//               </tbody>
//               </table>
//               ))}
//                     <div>
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//           <button key={page} onClick={() => handlePageChange(page)}>
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   </div>
        
//   );
// }


// export default Ladder; 



import React, { useEffect, useState } from 'react';

function Ladder() {
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalItemsToShow = 200;
  const pagesToShow = 5;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // First API call to retrieve data
        const firstResponse = await fetch('https://us.api.blizzard.com/data/wow/pvp-season/35/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE');
        const firstData = await firstResponse.json();
        setFirstData(firstData.entries.slice(0, totalItemsToShow));
      
      // Create an array of promises for second API calls
      const secondPromises = firstData.entries.slice(0, totalItemsToShow).map(async (item) => {
        // Extract necessary data from each item
      //           const item = firstData.entries[i];
         const stringData = item.character.name;
         const stringData2 = stringData.toLowerCase();

         const idData = item.character.realm.slug;

        // Make second API call using data from the first API
        const secondResponse = await fetch(
          `https://us.api.blizzard.com/profile/wow/character/${idData}/${stringData2}/appearance?namespace=profile-us&locale=en_US&access_token=USTBIHwv6rPyz2Eh0Mj6yTuI3Ma81utSqE`
        );
        return secondResponse.json();
      });


        // Wait for all second API calls to resolve
        const secondResponses = await Promise.all(secondPromises);
        setSecondData(secondResponses);
    
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Combine firstData and secondData when they both have data
    if (firstData.length > 0 && secondData.length > 0) {
      const combined = firstData.map((item, index) => ({
        ...item,
        ...secondData[index]
      }));
      setCombinedData(combined);
    }
  }, [firstData, secondData]);
  const totalPages = Math.ceil(combinedData.length / itemsPerPage);
  const visibleData = combinedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
    console.log(firstData);
    console.log(secondData);
  const getPageRange = () => {
    const totalButtons = Math.min(pagesToShow, totalPages);
    const middleButtonIndex = Math.ceil(totalButtons / 2);
    let startPage, endPage;

    if (currentPage <= middleButtonIndex) {
      startPage = 1;
      endPage = totalButtons;
    } else if (currentPage + middleButtonIndex > totalPages) {
      startPage = totalPages - totalButtons + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - middleButtonIndex + 1;
      endPage = currentPage + middleButtonIndex - 1;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='leaderboard-container'>
      <h1>3v3 Arena Leaderboard</h1>
      <div className='page-btns'>
<button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {getPageRange().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        {totalPages > pagesToShow && currentPage < totalPages - Math.floor(pagesToShow / 2) && (
          <span>...</span>
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className='table-container'>
      {visibleData.map((item, index) => (
          <table key={index} className="ladderTable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Info</th>
                <th>Realm</th>
                <th>Rating</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>%</th>
              </tr>
              </thead>
           <tbody>
              <tr>
    
                <td>{item.rank}</td>
          

                <td>{item.character.name}</td>
              
                <td>
                {item.faction.type === "HORDE" ? (
                    <img src="https://wow.zamimg.com/images/icons/horde.png" alt="Horde" />
                  ) : item.faction.type === "ALLIANCE" ?  (
                    <img src="https://wow.zamimg.com/images/icons/alliance.png" alt="Alliance" />
                  ) : (
                    <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg" alt="Unknown" />

                  )}

                      {/* {item.playable_class.name === "Warrior" ? (
                        <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg" alt="Warrior" />
                      ) : item.playable_class.name === "Paladin" ? (
                        <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg" alt="Paladin" />
                      ) : item.playable_class.name === "Hunter" ? (
                        <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg" alt="Hunter" />
                      ) : item.playable_class.name === "Rogue" ? (
                        <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg" alt="Rogue" />
                      ) : item.playable_class.name === "Priest" ? (
                        <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg" alt="Priest" />
                      ) : item.playable_class.name === "Death Knight" ? (
                        <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_deathknight.jpg" alt="Death Knight" />
                      ) : item.playable_class.name === "Shaman" ? (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg" alt="Shaman" />
                        ) : item.playable_class.name === "Mage" ? (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg" alt="Mage" />
                        ) : item.playable_class.name === "Warlock" ? (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg" alt="Warlock" />
                        ) : item.playable_class.name === "Monk" ? (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_monk.jpg" alt="Monk" />
                        ) : item.playable_class.name === "Druid" ? (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg" alt="Druid" />
                        ) : item.playable_class.name === "Demon Hunter" ? (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_demonhunter.jpg" alt="Demon Hunter" />
                        ) : (
                          <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg" alt="Unknown" />
                        )} */}
                        
                        {/* {item.playable_race.name === "Human" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
                  ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human female'/>
                  ): item.playable_race.name === "Dwarf" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='dwarf male'/>
                  ): item.playable_race.name === "Dwarf" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='dwarf female'/>

                  ): item.playable_race.name === "Nightelf" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='nightelf male'/>
                  ): item.playable_race.name === "Nightelf" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='nightelf female'/>
                  ): item.playable_race.name === "Gnome" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='gnome male'/>
                  ): item.playable_race.name === "Gnome" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='gnome female'/>
                  ): item.playable_race.name === "Draenei" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='draenei male'/>
                  ): item.playable_race.name === "Draenei" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='draenei female'/>
                  ): item.playable_race.name === "Worgan" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='worgan male'/>
                  ): item.playable_race.name === "Worgan" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='worgen female'/>
                  ): item.playable_race.name === "Pandaren" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren male'/>
                  ): item.playable_race.name === "Pandaren" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren female'/>
                  ): item.playable_race.name === "Dracthyr" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='Dracthyr male'/>
                  ): item.playable_race.name === "Orc" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='orc male'/>
                  ): item.playable_race.name === "Orc" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='orc female'/>
                  ): item.playable_race.name === "Undead" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='undead male'/>
                  ): item.playable_race.name === "Undead" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='undead female'/>
                  ): item.playable_race.name === "Troll" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='troll male'/>
                  ): item.playable_race.name === "Troll" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='troll female'/>
                  ): item.playable_race.name === "Bloodelf" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='bloodelf male'/>
                  ): item.playable_race.name === "Bloodelf" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='bloodelf female'/>
                  ): item.playable_race.name === "Globlin" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='globin male'/>
                  ): item.playable_race.name === "Globlin" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='globin female'/>
                  ): item.playable_race.name === "Pandaren" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren male'/>
                  ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='pandaren female'/>
                  ): item.playable_race.name === "Dracthyr" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='dracthyr female'/>
                  ): item.playable_race.name === "Human" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
                  ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
                  ): item.playable_race.name === "Human" && item.gender.type === "MALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>
                  ): item.playable_race.name === "Human" && item.gender.type === "FEMALE" ? (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/achievement_character_human_male" alt='human male'/>

                  ) : (
                  <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg" alt="Unknown" />


                  )}    */}
                  </td>
                <td>{item.character.realm.slug}</td>
                <td>{item.rating}</td>
                <td>{item.season_match_statistics.won}</td>
                <td>{item.season_match_statistics.lost}</td>
                <td>{Math.trunc(item.season_match_statistics.won / item.season_match_statistics.played * 100)}%</td>

              </tr>
              </tbody>
              </table>
              ))}
              </div>
    </div>
  );
}

export default Ladder;
