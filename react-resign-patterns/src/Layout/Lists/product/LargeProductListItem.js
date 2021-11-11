export const LargeProductListItem = ({product}) => {
  const {name, price, description, rating} = product;

  return (
    <>
      <h1>Name: {name} </h1>
      <p>
        price : {price}
        Description: {description}
      </p>
      <h4>Rating: {rating}</h4>
    </>
  );
}