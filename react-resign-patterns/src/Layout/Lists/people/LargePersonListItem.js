export const LargePersonListItem = ({person}) => {
  const {name, age, city, hobbies} = person;

  return (
    <>
      <h1>Name: {name} </h1>
      <p>
        City: {city}, Age: {age}
      </p>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </>
  );
}