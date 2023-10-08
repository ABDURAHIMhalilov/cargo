import "../App.css";
import logoImg from "../img/logo.jpg";

function Home() {
  function handlePress() {
    localStorage.clear();
    window.location = "/";
    window.reload();
  }
  return (
    <div className="App">
      <div className="navbar">
        <div className="minNav">
          <img src={logoImg} alt="" />
          {localStorage.getItem("key") ? (
            localStorage.getItem("key") == 1 ? (
              <div className="bgasc" 
              style={{
                width: "27%",
                display: "flex",
                justifyContent: "space-between",
              }}>
                <a href="/profile">
                  <button>Профиль</button>
                </a>
                <a href="/admin">
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
                </a>{" "}
                <button onClick={() => handlePress()}>Выйти</button>
              </div>
            ) : localStorage.getItem("key") == 3 ? (
              <div className="bgasc" 
              style={{
                width: "27%",
                display: "flex",
                justifyContent: "space-between",
              }}>
                <a href="/profile">
                  <button>Профиль</button>
                </a>
                <a href="/manager">
                  <button>Админ панел</button>
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
      <div className="header">
        <div className="shadowDiv" />
        <div className="inputForm">
          <input
            type="text"
            placeholder="Введите трек-код (номер отслеживания)"
          />
          <button>Найти</button>
        </div>
      </div>
      <div
        className="Main"
        style={{
          backgroundColor: "#0d6dfd0a",
        }}
      >
        <center>
          <h1>Статус заказ</h1>
        </center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "auto",
          }}
        >
          <h1>otprav</h1>
          <h1>komu</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "auto",
          }}
        >
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            otpravitel:{" "}
            <p style={{ fontSize: 20, fontWeight: "lighter", marginLeft: 10 }}>
              Ivanov
            </p>
          </h1>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            poluchatel:{" "}
            <p style={{ fontSize: 20, fontWeight: "lighter", marginLeft: 10 }}>
              petrov
            </p>
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "auto",
          }}
        >
          <h1>otkuda</h1>
          <h1>kuda</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "auto",
            marginTop: -20,
          }}
        >
          <p>otkuda</p>
          <p>kuda</p>
        </div>
        <div
          style={{
            background: "#fff",
            width: "65%",
            margin: "auto",
            padding: 10,
          }}
        >
          <a href="">Scrit polni marshut</a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              borderBottom: "1px solid",
            }}
          >
            <h1 style={{ width: "30%", fontWeight: "400", height: 15 }}>
              data
            </h1>
            <h1 style={{ width: "30%", fontWeight: "400", height: 15 }}>
              status
            </h1>
            <h1 style={{ width: "40%", fontWeight: "400", height: 15 }}>
              mesto
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              borderBottom: "1px solid",
              paddingRight: 5,
              paddingLeft: 5,
            }}
          >
            <p style={{ width: "30%", fontWeight: "400" }}>6.10.2023</p>
            <p style={{ width: "30%", fontWeight: "400" }}>zakaz sozdan</p>
            <p style={{ width: "40%", fontWeight: "400" }}>
              sankt peterburg, yл Rub
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
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

export default Home;
