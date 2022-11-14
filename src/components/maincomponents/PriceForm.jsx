import React, { useEffect, useState } from "react";

function PriceForm() {
  const [priceValues, setValues] = useState({
    competitor: "",
    baseprice: "",
    indexprice: "",
  });
  function changeHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    setValues({ ...priceValues, [name]: value });
  }
  function submit() {
    console.log(priceValues, "priceValues");
    setValues({
      competitor: "",
      baseprice: "",
      indexprice: "",
    });
  }

  return (
    <div className="priceform">
      <form>
        <div>
          <h1>Competitor Price</h1>
          <input
            type="text"
            name="competitor"
            value={priceValues.competitor}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>Base Price</h1>
          <input
            type="text"
            name="baseprice"
            value={priceValues.baseprice}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <h1>Index Price</h1>
          <input
            type="text"
            name="indexprice"
            value={priceValues.indexprice}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </form>
      <div className="btn-con">
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default PriceForm;
