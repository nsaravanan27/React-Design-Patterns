export const RegularList = ({ items, resouceName, itemComponent: ItemComponent}) => {
  return (
    <>
      {items.map((item, index) => (
        // person: item
        <ItemComponent key={index} {...{[resouceName]: item}} />
      ))}
    </>
  );
}