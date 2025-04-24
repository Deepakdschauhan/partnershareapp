import React from "react";

function Frms({ nameData, FrmValue, OnInValue, print, prin, setprin }) {
  const ashare = Number(FrmValue.value1);
  const bshare = Number(FrmValue.value2);
  const cshare = Number(FrmValue.value3);

  const asharediv = ashare / 3;
  const bsharediv = bshare / 3;
  const csharediv = cshare / 3;

  let a2b = 0,
    a2c = 0,
    b2c = 0,
    b2a = 0,
    c2a = 0,
    c2b = 0;

  if (asharediv < csharediv && csharediv < bsharediv) {
    a2c = csharediv - asharediv;
    a2b = bsharediv - asharediv;
    c2b = bsharediv - csharediv;
  } else if (bsharediv < csharediv && csharediv < asharediv) {
    b2c = bsharediv - csharediv;
    b2a = asharediv - bsharediv;
    c2a = asharediv - csharediv;
  } else if (csharediv < asharediv && asharediv < bsharediv) {
    c2a = asharediv - csharediv;
    a2b = bsharediv - asharediv;
    c2b = bsharediv - csharediv;
  } else if (bsharediv < asharediv && asharediv < csharediv) {
    b2a = asharediv - bsharediv;
    b2c = csharediv - bsharediv;
    a2c = csharediv - asharediv;
  } else if (csharediv < bsharediv && bsharediv < asharediv) {
    b2a = asharediv - bsharediv;
    c2a = asharediv - csharediv;
    c2b = bsharediv - csharediv;
  } else if (asharediv < bsharediv && bsharediv < csharediv) {
    a2c = csharediv - asharediv;
    a2b = bsharediv - asharediv;
    b2c = csharediv - bsharediv;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setprin(true);
  }

  return (
    <>
      <div>
        <h2> Enter shares Here..</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <label>
              <h5>
                {print
                  ? `Enter Share of ${nameData[`name${i}`]}`
                  : `Enter Share of Person ${i}`}
              </h5>
            </label>
            <input
              type="number"
              value={FrmValue[`value${i}`]}
              onChange={(e) => OnInValue(`value${i}`, e.target.value)}
            />
          </div>
        ))}
        <div>
          <button type="submit">Calculate..</button>
        </div>
      </form>

      <hr />

      {print && prin && (
        <div>
          <h4>
            {nameData.name1}'s share divided by 3: {asharediv}
          </h4>
          <h4>
            {nameData.name2}'s share divided by 3: {bsharediv}
          </h4>
          <h4>
            {nameData.name3}'s share divided by 3: {csharediv}
          </h4>
          <h4>
            {nameData.name1} gives to {nameData.name2}: {a2b}
          </h4>
          <h4>
            {nameData.name1} gives to {nameData.name3}: {a2c}
          </h4>
          <h4>
            {nameData.name2} gives to {nameData.name1}: {b2a}
          </h4>
          <h4>
            {nameData.name2} gives to {nameData.name3}: {b2c}
          </h4>
          <h4>
            {nameData.name3} gives to {nameData.name2}: {c2b}
          </h4>
          <h4>
            {nameData.name3} gives to {nameData.name1}: {c2a}
          </h4>
        </div>
      )}
    </>
  );
}

export default Frms;
