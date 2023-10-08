import React from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function Page4() {
  function handlePress() {
    document.querySelector(".MainS").style = "display: none";
    document.querySelector(".opacityDiv").style = "display: block";
  }

  function handlePress2() {
    document.querySelector(".MainS").style = "display: block";
    document.querySelector(".opacityDiv").style = "display: none";
  }
  return (
    <div>
      <div className="opacityDiv">
      <h4 onClick={() => handlePress2()}><AiOutlineArrowLeft style={{ fontSize: 30, cursor: 'pointer' }} /></h4>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h2>Пользователь</h2>
        <div>
          <div style={{  }}>
            <p style={{ height: 7 }}>email</p>
            <input type="text" style={{ width: '100%', height: 40, borderRadius: 4, border: '1px solid gray' }} />
          </div>

          <div style={{  }}>
            <p style={{ height: 7 }}>Адрес</p>
            <input type="text" style={{ width: '100%', height: 40, borderRadius: 4, border: '1px solid gray' }} />
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <input type="checkbox" />
              Сделать менеджером
            </div>
          </div>
        </div>
        <button style={{ background: '#800000', height: 40, width: 150, border: 'none', borderRadius: 5, color: 'white', fontSize: 17 }}>Обновить</button>
      </div>
      </div>
      <div className="MainS" style={{ width: "100%" }}>
        <div className="adminPage1">
          <h1>Все пользователи</h1>
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
                <h1 style={{ width: "90%" }}>webabbas9@gmail.com</h1>
              </div>
              <p>Менеджер</p>
              <p style={{ marginRight: 7 }}>Редактировать</p>
            </div>
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
                <h1 style={{ width: "90%" }}>webabbas9@gmail.com</h1>
              </div>
              <p style={{ marginRight: 7 }}>Редактировать</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
