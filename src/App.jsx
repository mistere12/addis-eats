import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";

function App() {
  return (
    <div>
      <Header/>   {/*component composition*/}
      <Menu/>
      <Footer/>
    </div>  
  );
}

export default App;
