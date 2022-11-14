import React from 'react'

function Header() {
  return (
    <div>
      {" "}
      <nav>
        <ul className='ul'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/demand">Demand</a>
          </li>
          <li>
            <a href="/">selling</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header