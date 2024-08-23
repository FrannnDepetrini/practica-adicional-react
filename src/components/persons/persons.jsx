import Person from "../person/person";

const Persons = ({ prs }) => {
  const prsFiltered = prs
    .filter((pr) => pr[0] == "P")
    .map((pr, i) => <Person key={i} name={pr}></Person>);
  return prsFiltered;
};

export default Persons;
