import React from "react";
import "./Header.css";

const Header = ({ setSearchQuery }) => {
  const [search, setSearch] = React.useState("");

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
          window.focus();
          if (document.activeElement) {
            document.activeElement.blur();
          }
        }}
      >
        Result
      </button>
    </div>
  );
};

export default Header;
