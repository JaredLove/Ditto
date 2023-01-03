import React,{ useState, useEffect} from 'react';
import  Axios  from 'axios';
import Names from '../../components/Names'
import Pagination from '../../components/Pagination';



const API_URL="https://us.api.blizzard.com/data/wow/pvp-season/34/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=US4Rliag97dya43Xlauf95XhGMg4cl2YG5";
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e62a8500b88c9a431caf5c5d9c7a7674&query";
const Ladder = () => {
  const [ladders, setLadder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, SetCurrentPage] = useState(1);
  const [namesPerPage] = useState(50);
    useEffect(() => {
    const fetchLadder = async () => {
      setLoading(true);
      const res = await Axios.get(API_URL);
      setLadder(res.data.entries);
      setLoading(false);
    }

    fetchLadder();
  }, []);
  
const indexOfLastPage = currentPage * namesPerPage;
const indexOfFirstPage = indexOfLastPage - namesPerPage;
const currentLadder = ladders.slice(indexOfFirstPage, indexOfLastPage);
 

const paginate = (pageNumber) => SetCurrentPage(pageNumber);
        return (
      <div> 
       <Names ladders={currentLadder} loading={loading} />
       <Pagination namesPerPage={namesPerPage} totalNames={ladders.length} paginate={paginate} />

       
      </div>
      );}

export default Ladder; 