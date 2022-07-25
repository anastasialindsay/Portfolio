import { useState, useEffect } from "react";

import CardList from "./employee-card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

import "./employee-lookup.styles.scss";

const EmployeeLookup = () => {
  const [searchField, setSearchField] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setEmployees(users));
  }, []);

  useEffect(() => {
    const newFilteredEmployees = employees.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEmployees(newFilteredEmployees);
  }, [employees, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="finder-container">
      <div className="finder-title-search">
        <h1 className="finder-title">Employee Finder</h1>

        <SearchBox
          className="employee-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search employees"
        />
      </div>
      <div className="finder-results">
        <CardList employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default EmployeeLookup;
