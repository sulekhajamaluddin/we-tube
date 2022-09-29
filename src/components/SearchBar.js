import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchWord, setSearchWord] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setSearchWord(e.target.value);
    }

    const handleClick = () => {
        navigate('/searchresults', { state: { searchWord:searchWord}})
    }

  return (
    <div>
      <input className="search-input-field" placeholder="Search"
      onChange={(e) => handleChange(e)}></input>
      <button className="search-icon" onClick={() => handleClick()}>
        <FiSearch />
      </button>
    </div>
  );
};
export default SearchBar;
