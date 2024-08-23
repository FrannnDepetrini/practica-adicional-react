import FamilyMember from "../familyMember/familyMember";

const Family = ({ prs }) => {
  const familySorted = prs
    .sort((a, b) => b.age - a.age)
    .map((pr, i) => (
      <FamilyMember key={i} name={pr.name} age={pr.age}></FamilyMember>
    ));
  return familySorted;
};

export default Family;
