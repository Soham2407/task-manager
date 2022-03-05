import React from "react";
import SearchTask from "./SearchTask";
import "../styles/Navbar.css";

const Navbar = ({
  title,
  searchValue,
  setSearchValue,
  switchChangeHandler,
  nightMode,
}) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        nightMode ? "dark" : "light"
      } bg-${nightMode ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <i
            className={`fa-solid fa-sun sun-icon ${
              nightMode ? "icon-white" : ""
            }`}
          ></i>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={switchChangeHandler}
              checked={nightMode}
            />
            <label
              class="form-check-label moon-label"
              for="flexSwitchCheckDisabled"
            >
              <i
                class={`fa-solid fa-moon ${nightMode ? "icon-white" : ""}`}
              ></i>
            </label>
          </div>
          <SearchTask
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
