function App() {
  const title = "Do Market Research";
  const id = "BUS-1";
  const points = 5;
  return (
    <div className="px-2 m-2 border rounded-lg bg-gray-50">
      <div className="py-2 text-base font-semibold font">{title}</div>
      <div className="flex justify-between gap-4 py-2 text-gray-700">
        <div>{id}</div>
        <div>EL</div>
        <div>{points}</div>
      </div>
    </div>
  );
}

export default App;
