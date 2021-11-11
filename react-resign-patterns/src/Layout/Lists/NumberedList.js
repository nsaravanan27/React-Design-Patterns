export const NumberedList = ({ items, resouceName, itemComponent: ItemComponent}) => {
  return (
    <>
      {items.map((item, index) => (
        // person: item
        <>
          <h3>{index + 1}</h3>
          <ItemComponent key={index} {...{ [resouceName]: item }} />
        </>
      ))}
    </>
  );
}