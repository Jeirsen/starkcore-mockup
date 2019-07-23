import React from "react";
import Checkbox from "react-simple-checkbox";
import "./PurchaseItem.css";

const PurchaseItem = () => {
  return (
    <div>
      <div className="ui grid">
        <div className="one wide column" style={{ margin: "auto" }}>
          <Checkbox
            id="search"
            color={{
              backgroundColor: "#ee8c39",
              borderColor: "#ee8c39",
              uncheckedBorderColor: "#ee8c39"
            }}
            size={4}
            checked
          />
        </div>
        <div className="fourteen wide column">
          <div className="ui segment" style={{ borderRadius: "10px" }}>
            <div className="ui divided three column grid">
              <div class="row center-items">
                <div class="three wide column">
                  <h5 class="ui header disabled centered">
                    Monday 10<sup>th</sup> 2:28 PM
                  </h5>
                </div>
                <div class="four wide column">
                  <h5 class="ui header disabled centered">
                    Houston, TX, 33619
                  </h5>
                  <h5 class="ui header disabled centered">
                    Atlanta, GA, 30123
                  </h5>
                </div>
                <div class="nine wide column">
                  <div className="ui three column grid">
                    <div className="column">
                      <h2 class="ui header">
                        <i aria-hidden="true" class="shipping icon" />
                      </h2>
                    </div>
                    <div className="column">
                      <h2 class="ui header">$ 250.00</h2>
                    </div>
                    <div className="column">
                      <div class="ui red label medium">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;
