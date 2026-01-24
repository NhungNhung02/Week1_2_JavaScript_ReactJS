import Button from "./components/Btap2/Button/Button";

function App() {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "12px" }}>
      <Button type="primary" text="Save" />
      <Button type="danger" text="Delete" />
      <Button type="success" text="Submit" />
    </div>
  );
}

export default App;
