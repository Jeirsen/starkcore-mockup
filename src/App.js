import React from "react";

import SideBar from "./components/sidebar/SideBar";
import Navbar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import PurchaseItem from "./components/purchase-item/PurchaseItem";
import AddButton from "./components/add-button/AddButton";
import "./App.css";

function App() {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <SideBar />
          </div>
          <div className="twelve wide column">
            <Navbar />
            <SearchBar />
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
          </div>
        </div>
      </div>
      <AddButton />
    </div>
  );
}

export default App;
