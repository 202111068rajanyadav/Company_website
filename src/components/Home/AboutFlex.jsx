import "./aboutflex.css";

const AboutFlex = ({ data }) => {
  // console.log(data);

  return data.map((item, index) => {
    return (
      <div key={index}>
        {item.index % 2 === 0 ? (
          <div className="sabkaPAPA">
            <div className="row">
              <div
                className="container container-1"
                style={{ textAlign: "right" }}
              >
                <h2>
                  <span
                    className="title"
                    style={{ fontSize: "35px", fontWeight: "bold" }}
                  >
                    {item.title}
                  </span>
                </h2>
                <p style={{ fontSize: "18px", textAlign: "left" }}>
                  {item.desc}
                </p>
              </div>

              {/* Second Container: Icon and Line */}
              <div className="container">
                <div className="icon-container">
                  <div className="icon">
                    <img src={item.icon} alt="Icon" className="rotate" />
                  </div>
                  <div className="lineDiv">
                    <div className="line"></div>
                  </div>
                </div>
              </div>

              {/* Third Container: Empty */}
              <div className="container empty-container"></div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-100">
            <div className="row">
              <div className="container empty-container"></div>
              {/* Second Container: Icon and Line */}
              <div className="container">
                <div className="icon-container">
                  <div className="icon">
                    <img src={item.icon} alt="Icon" className="rotate" />
                  </div>
                  <div className="line"></div>
                </div>
              </div>

              {/* Third Container */}
              <div
                className="container container-1"
                style={{ textAlign: "left" }}
              >
                <h2>
                  <span
                    className="title"
                    style={{ fontSize: "35px", fontWeight: "bold" }}
                  >
                    {item.title}
                  </span>
                </h2>
                <p style={{ fontSize: "18px", textAlign: "left" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });
};

export default AboutFlex;
