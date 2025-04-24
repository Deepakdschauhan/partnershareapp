import React from "react";

function Names({ nameData, onInputname, setprint }) {
  const getFormData = (e) => e.preventDefault();

  return (
    <div>
      <h3>Enter Names</h3>
      <br />
      <form onSubmit={getFormData}>
        <div>
          <label>Enter First person Name:</label>
          <input
            type="text"
            value={nameData.name1}
            onChange={(e) => onInputname("name1", e.target.value)}
          />
        </div>
        <div>
          <label>Enter second person Name:</label>
          <input
            type="text"
            value={nameData.name2}
            onChange={(e) => onInputname("name2", e.target.value)}
          />
        </div>
        <div>
          <label>Enter last one Name:</label>
          <input
            type="text"
            value={nameData.name3}
            onChange={(e) => onInputname("name3", e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={() => setprint(true)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Names;
