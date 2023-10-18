import React, { useState } from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Meneger from "./MenegerPage"
import "./All.css";

export default function Page1() {
  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(0);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* <button
        onClick={() => {
          window.location = "/";
        }}
      >
        Go Home
      </button> */}
      <div className="ScrollBar">
        {/* <button
          onClick={() => {
            setPage(0);
          }}
        >
          page2
        </button>
        <button
          onClick={() => {
            setPage(1);
          }}
        >
          page1
        </button> */}
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="pagesBlockMain">Главная</div>
        </a>
        <hr />
        {page2 === 0 ? (
          <>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(0);
                setPage(0);
              }}
              style={{ backgroundColor: "#0a58ca" }}
            >
              Все заказы
            </div>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(2);
                setPage(2);
              }}
            >
              Пользователи
            </div>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(3);
                setPage(3);
              }}
            >
              Meneger
            </div>
            <div
            className="pagesBlock"
            onClick={() => {
              setPage2(4);
              setPage(4);
            }}
          >
          Добавить заказ
          </div>
          </>
        ) : page2 === 1 ? (
          <>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(0);
                setPage(0); 
              }}
            >
              Все заказы
            </div>
          
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(2);
                setPage(2);
              }}
            >
              Пользователи
            </div>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(3);
                setPage(3);
              }}
            >
              Meneger
            </div>
            <div
            className="pagesBlock"
            onClick={() => {
              setPage2(4);
              setPage(4);
            }}
          >
          Добавить заказ
          </div>
          </>
        ) : page2 === 2 ? (
          <>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(0);
                setPage(0);
              }}
            >
              Все заказы
            </div>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(2);
                setPage(2);
              }}
              style={{ backgroundColor: "#0a58ca" }}
            >
              Пользователи
            </div>
            <div
              className="pagesBlock"
              onClick={() => {
                setPage2(3);
                setPage(3);
              }}
            >
              Meneger
            </div>
            <div
            className="pagesBlock"
            onClick={() => {
              setPage2(4);
              setPage(4);
            }}
          >
          Добавить заказ
          </div>
          </>
        ) : page2===3?(
          <>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(0);
              setPage(0);
            }}
          >
            Все заказы
          </div>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(2);
              setPage(2);
            }}
          >
            Пользователи
          </div>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(3);
              setPage(3);
            }}
            style={{ backgroundColor: "#0a58ca" }}
          >
            Meneger
          </div>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(4);
              setPage(4);
            }}
          >
          Добавить заказ
          </div>
        </>
        ):page2===4?(
          <>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(0);
              setPage(0);
            }}
          >
            Все заказы
          </div>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(2);
              setPage(2);
            }}
          >
            Пользователи
          </div>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(3);
              setPage(3);
            }}
          >
            Meneger
          </div>
          <div
            className="pagesBlock"
            onClick={() => {
              setPage2(4);
              setPage(4);
            }}
            style={{ backgroundColor: "#0a58ca" }}
          >
          Добавить заказ
          </div>
        </>
        ):
        (
          ""
        )}
        <div className="pagesAd">
          <img src="https://github.com/mdo.png" alt="" />
          <h1>Администратор</h1>
        </div>
      </div>
      <div style={{ width: "82%" }}>
        {page === 0 ? (
          <Page2 />
        ) : page === 1 ? (
          <Page3 />
        ) : page === 2 ? (
          <Page4 />
        ) : page === 3?(
          <Meneger/>
        ) :page === 4?(
          <Page3/>
        ) :("")
        }
      </div>
    </div>
  );
}
