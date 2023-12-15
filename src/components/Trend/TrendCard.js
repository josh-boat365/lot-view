import React from "react";

function TrendCard() {
    
  const renderBoxes = (rows, cols) => {
    const boxes = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(
          <td key={j} className="box">
            S
          </td>
        );
      }
      boxes.push(<tr key={i}>{row}</tr>);
    }
    return boxes;
  };

  return (
    <div>
      <div className="card shadow-3">
        <div className="card-header">
          <div className="l-side">
            <div>
              <b>
                <p>Rapid 5D</p>
              </b>
              <p>O/E 3rd</p>
            </div>
          </div>
          <div className="r-side">
            <div>
              <p>00:00:36</p>
              <p>Single - Hop</p>
            </div>
          </div>
        </div>
        <div className="table-card">
          <table>
              <thead></thead>
            <tbody>
              {renderBoxes(6, 25)}
            </tbody>
          </table>
        </div>
        <div className="table-footer">
          <div className="l-side">
            <div>
              <p>Bet</p>
              <p>Big</p>
              <p>1,9032</p>
            </div>
          </div>
          <div className="r-side">
            <div>
              <p>Bet</p>
              <p>Big</p>
              <p>1,9032</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendCard;
