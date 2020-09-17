import React from "react";
import "./Header.css";

const Header = ({ setSearchQuery }) => {
  const [search, setSearch] = React.useState("");

  document.onkeyup = (e) => {
    e = e || window.event;
    if (e.keyCode === 13) setSearchQuery(search);
  };

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          setSearchQuery(search);
        }}
      >
        Result
      </button>
    </div>
  );
};

export default Header;
