import React from 'react'

const Form = ({ changeTextField }) => {
    return (
        <div>
            <div className="coin-search">
        <h1 className="search-header">Input Coin Name</h1>
        <form>
          <input
            type="text"
            className="form-coin-input"
            placeholder="Search"
            onChange={changeTextField}
          />
        </form>
      </div>
        </div>
    )
}

export default Form
