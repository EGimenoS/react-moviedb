import React from "react";
import { SearchForm } from "./SearchForm";

const Nav = () => {
  return (
    <div className="Navbar">
      <SearchForm />
      <a href="/">
        <h2>Show Popular Movies</h2>
      </a>{" "}
    </div>
  );
};

export { Nav };
