import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Navigation } from "./routes/Navigation";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
   <NavBar/>
    <Navigation id={0} title={""} price={0} category={""} description={""} image={""} includedInSum={false} page={0} per_page={0} />
    <ToastContainer />
    </>

  )
}

export default App;
