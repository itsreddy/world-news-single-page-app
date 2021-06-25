import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;

// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import World from "./components/World";
// import Loading from "./components/loading";
// import { BrowserRouter, Route } from "react-router-dom";
// import News from "./components/News";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className='App'>
//         <Header />
//         </div>
//         <Route path='/world' component={World} />
//         <Route path='/loading' component={Loading} />
//         <Route path='/news' component={News} />
//         <Footer />

//     </BrowserRouter>
//   );
// }
