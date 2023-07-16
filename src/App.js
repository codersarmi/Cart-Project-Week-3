import Main from "./Layout/Main";
import ItemContextProvider from "./Store/itemContext";
function App() {
  return (
    <>
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </>
  );
}

export default App;
