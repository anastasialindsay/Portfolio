import Card from "../employee-card/card.component";

import "./card-list.styles.css";

const CardList = ({ employees }) => (
  <div className="card-list">
    {employees.map((employee) => {
      return <Card key={employee.id} employee={employee} />;
    })}
  </div>
);

export default CardList;
