import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "orange", price: 100, soleout: true },
    { name: "banana", price: 200, soleout: false },
    { name: "mango", price: 300, soleout: true },
    { name: "apple", price: 400, soleout: false },
    { name: "pineapple", price: 500, soleout: true },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soleout}
          />
        ))}
      </ul>
    </>
  );
}
