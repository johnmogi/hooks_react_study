import React, { useState } from "react";
import { useFetch } from "./hooks";
function FetchCoins() {
  const [data, loading] = useFetch(
    "https://api.coingecko.com/api/v3/coins/list"
  );

  const [selected, updateSelected] = useState(0);

  function getCoin(id) {
    console.log(id.id);
  }
  return (
    <>
      {loading ? (
        "This will take a bit of time - Loading 6k coins..."
      ) : (
        <div className="container">
          <div className="row">
            {data.map(({ id, symbol, name }) => (
              <div className="col-4 card border-dark mb-3" key={id}>
                <div className="card-header">
                  {name}

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onClick={() => getCoin({ id })}
                    ></input>
                  </div>
                </div>
                <div className="card-body text-dark">
                  <h5 className="card-title">{symbol}</h5>
                  <p className="card-text">more info</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default FetchCoins;
