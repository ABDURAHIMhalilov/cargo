import React, { useEffect } from "react";
import "./css/Profile.css";
import "../App.css";
import logoImg from "../img/logo.jpg";
import axios from "axios";
export default function Profile() {
  function handlePress() {
    localStorage.clear();
    window.location = "/";
  }
  function handleDelete() {
    var userId = localStorage.getItem("id");
    localStorage.clear();
    axios
      .delete(`https://trak-code.onrender.com/auth/users/${userId}`)
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    var emaill = localStorage.getItem("email");
    var address = localStorage.getItem("address");
    var add = address === null ? "" : address;
    document.querySelector("#email").value = emaill;
    document.querySelector("#adres").value = add;
  }, []);
  function putData() {
    var userId = localStorage.getItem("id");
    var password = localStorage.getItem("password");
    var data = new FormData();
    data.append("email", document.querySelector("#email").value);
    data.append("address", document.querySelector("#adres").value);
    data.append("password", password);
    console.log(userId);
    axios
      .put(`https://trak-code.onrender.com/auth/users/${userId}`, data)
      .then((res) => {
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("address", res.data.address);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="headd">
      <div className="navbar">
        <div className="minNav">
          <a href="/">
            <img src={logoImg} alt="" />
          </a>
          {localStorage.getItem("key") ? (
            localStorage.getItem("key") == 1 ? (
              <div className="bgasc">
                <a href="/profile">
                  <button>Профиль</button>
                </a>
                <a href="/profile">
                  <button>Админ панел</button>
                </a>

                <button onClick={() => handlePress()}>Выйти</button>
              </div>
            ) : localStorage.getItem("key") == 2 ? (
              <div
                style={{
                  width: "12%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="/profile">
                  <button>Профиль</button>
                </a>
                <button onClick={() => handlePress()}>Выйти</button>
              </div>
            ) : (
              <a href="/login">
                <button>Войти</button>
              </a>
            )
          ) : (
            <a href="/login">
              <button>Войти</button>
            </a>
          )}
          {/* {localStorage.getItem("key") ? (
          <a href="/profile">
            <button>Профиль</button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handlePress()}
            >
              Выйти
            </button>
          </a>
        ) : (
          <a href="/login">
            <button>Войти</button>
          </a>
        )} */}
        </div>
      </div>

      <center>
        <h1>Профиль</h1>
      </center>
      <div className="bigCard2">
        <h1>Пользователь</h1>
        <div>
          <p>email</p>
          <input style={{ paddingLeft: 10 }} id="email" type="text" />
        </div>
        <div>
          <p>Адрес</p>
          <input style={{ paddingLeft: 10 }} id="adres" type="text" />
        </div>
        <div className="btn-group">
          <button onClick={() => putData()}>Обновить</button>
          <button onClick={() => handleDelete()}>Удалить аккаунт</button>
        </div>
        <h1>Мои заказы</h1>
      </div>
      <div className="footer" style={{ paddingTop: "140px" }}>
        <div style={{ marginLeft: "10%" }}>
          <a href="" style={{ color: "#800000" }}>
            ⋅ Политика конфиденциальности
          </a>
          <p style={{ color: "gray" }}>© 2B LOGISCTIC EXPRESS CARGO</p>
        </div>
      </div>
    </div>
  );
}
