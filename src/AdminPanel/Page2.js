import React from "react";
import "./All.css";
// import AiOutlineArrowLeft from 'react-icons/AiOutlineArrowLeft'
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function Page2() {
  function handlePress() {
    document.querySelector(".MainS").style = "display: none";
    document.querySelector(".opacityDiv").style = "display: block";
  }

  function handlePress2() {
    document.querySelector(".MainS").style = "display: block";
    document.querySelector(".opacityDiv").style = "display: none";
  }
  return (
    <div style={{ width: "100%" }}>
      <div className="opacityDiv">
        <h4 onClick={() => handlePress2()}><AiOutlineArrowLeft style={{ fontSize: 30, cursor: 'pointer' }} /></h4>
        <h1 style={{ marginLeft: '10%' }}>Обновить заказ</h1>
        <div style={{ paddingLeft: 140 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{ width: "40%" }}>
              <span>Отправитель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>Получатель</span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
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
              justifyContent: "space-around",
              alignItems: "center",
              // height: 120
            }}
          >
            <div style={{ width: "40%" }}>
              <span>Адрес</span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>Адрес</span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
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
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{ width: "40%" }}>
              <span>Трек-код</span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>email</span>
              <br />
              <input
                type="text"
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          <button style={{ background: '#800000', border: 'none', height: 40, borderRadius: 5, color: 'white', fontWeight: '400', fontSize: 17, marginLeft: 50, marginTop: 10 }}>Обновить заказ</button>
        </div>
      </div>
      <div className="MainS" style={{ width: "100%" }}>
        <div className="adminPage1">
          <h1>Все заказы</h1>
          <div className="inpForm1">
            <input type="file" />
            <div>
              <h2>Choose file</h2>
              <h2>No file choosen</h2>
            </div>
            {/* <input type="file" /> */}
            <button>Загрузить</button>
          </div>
        </div>
        <div className="bigOrder">
          <div className="mainOrder">
            <div className="minOrder" onClick={() => handlePress()}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "30%",
                }}
              >
                <img src="https://github.com/twbs.png" alt="" />
                <div>
                  <h1 style={{ height: "7px" }}>YT8929328214977</h1>
                  <p style={{ marginLeft: 7, fontSize: "15px" }}>
                    Санкт-Петербург, ул. Рубинштейна 17
                  </p>
                </div>
              </div>
              <p style={{ marginRight: 7 }}>Доставлено</p>
            </div>
            <div className="minOrder" onClick={() => handlePress()}>
              <div
                style={{
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "space-between",
                  width: "30%",
                }}
              >
                <img src="https://github.com/twbs.png" alt="" />
                <div>
                  <h1 style={{ height: "7px" }}>YT8929328214977</h1>
                </div>
              </div>
            </div>
            {/* <div className="minOrder">
            <img src="https://github.com/twbs.png" alt="" />
            <h1>YT8929328214977</h1>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
