import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import myLinkedIn from "../linkedin.jp"
import NavBar from "./NavBar"
import Header from "./Header"
import Particles from "react-particles-js"

function App() {
  return (
    <>
    <Particles
    className= "particles-canvas"
      params={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 700 
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 15,
              color: "#c2c2f0"
            }
          }
        }
      }}
    />
    <NavBar/>
    <Header/>
    </>
  );
}

export default App;
