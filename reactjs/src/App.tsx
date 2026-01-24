import ProductCard from "./components/Btap1/ProductCard/ProductCard";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <ProductCard
        image="https://picsum.photos/300/200"
        name="Nike Air Force 1"
        price={120}
      />
    </div>
  );
}

export default App;
