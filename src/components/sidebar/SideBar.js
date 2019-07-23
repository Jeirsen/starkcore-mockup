import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="ui pointing secondary vertical menu full">
      <div className="item">
        <img
          src="https://media.licdn.com/dms/image/C4E0BAQEgNMa6Im5NlA/company-logo_200_200/0?e=2159024400&v=beta&t=4ViRsHvSkLfKOo3hUK9FJBpQ-EL69ZpvZd3t_DfIGJM"
          className="ui tiny centered circular image"
        />
      </div>
      <div className="item">
        <h4 className="ui header centered">
          <i aria-hidden="true" className="idea small icon" />
          <div className="content">Smart Filters</div>
        </h4>

        <div className="ui divider" />
      </div>
      <div className="item">
        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <h1 className="ui header">
                <div className="content">
                  <i aria-hidden="true" className="certificate large icon" />
                </div>
              </h1>
            </div>
            <div className="column">
              <h1 className="ui header">
                <div className="content">
                  <div className="ui toggle checkbox">
                    <input type="checkbox" checked name="public" />
                    <label />
                  </div>
                </div>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <h1 className="ui header">
                <div className="content">
                  <i
                    aria-hidden="true"
                    className="calendar alternate outline large icon"
                  />
                </div>
              </h1>
            </div>
            <div className="column">
              <h1 className="ui header">
                <div className="content">
                  <div className="ui toggle checkbox">
                    <input type="checkbox" checked name="public" />
                    <label />
                  </div>
                </div>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <h1 className="ui header">
                <div className="content">
                  <i aria-hidden="true" className="heart outline large icon" />
                </div>
              </h1>
            </div>
            <div className="column">
              <h1 className="ui header">
                <div className="content">
                  <div className="ui toggle checkbox">
                    <input type="checkbox" checked name="public" />
                    <label />
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="ui divider" />
      </div>
      <div className="item">
        <h4 className="ui header centered">
          <div className="content">Status</div>
        </h4>
        <div className="content">
          <div className="ui icon input fluid">
            <input type="text" placeholder="Search..." />
            <i aria-hidden="true" className="search icon" />
          </div>
        </div>
        <div className="content" style={{ paddingTop: "20px" }}>
          <button className="ui fluid button white">DELIVERED</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
