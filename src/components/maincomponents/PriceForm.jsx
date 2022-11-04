import React from 'react'

function PriceForm() {
  return (
    <div className="priceform">
      <form>
        <div>
          <h1>Competitor Price</h1>
          <input type="text" />
        </div>
        <div>
          <h1>Base Price</h1>
          <input type="text" />
        </div>
        <div>
          <h1>Index Price</h1>
          <input type="text" />
        </div>
      </form>
      <div className="btn-con">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default PriceForm;