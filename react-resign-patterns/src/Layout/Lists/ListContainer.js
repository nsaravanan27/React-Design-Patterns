import { NumberedList } from "./NumberedList";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargeProductListItem } from "./product/LargeProductListItem";
import { SmallProductListItem } from "./product/SmallProductListItem";
import { RegularList } from "./RegularList";
import { people, products } from "./SampleData";

export const ListContainer = () => {
  return (
    <>
      <RegularList
        items={people}
        resouceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resouceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resouceName="product"
        itemComponent={SmallProductListItem}
      />
      <RegularList
        items={products}
        resouceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}