import React from "react";

export default function Page3() {
  return (
    <div>
      <div className="opacitsyDiv">
        <h1 style={{ marginLeft: "10%" }}>Обновить заказ</h1>
        <div style={{ paddingLeft: 140 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: 120
            }}
          >
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          {/* <button
            style={{
              background: "#ccc",
              border: "none",
              height: 40,
              fontSize: 15,
              borderRadius: 5,
              marginLeft: 143,
              marginTop: 10
            }}
          >
            Добавить промежуточный пункт
          </button> */}
          <div style={{ width: "75%", margin: "auto", marginTop: 30 }}>
            <div style={{ width: "80%", marginTop: 10 }}>
              <span>Пункт 1</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
                placeholder="Название промежуточного пункта"
              />
            </div>
            {/* <div style={{ width: "80%", marginTop: 10 }}>
              <span>Пункт 1</span>
              <br />
              <input
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
                placeholder="Название промежуточного пункта"
              />
            </div> */}
          </div>
          <button
            style={{
              background: "#800000",
              border: "none",
              height: 40,
              fontSize: 15,
              borderRadius: 5,
              marginLeft: 180,
              marginTop: 10,
              color: 'white'
            }}
          >
            Добавить заказ
          </button>
        </div>
      </div>
    </div>
  );
}
