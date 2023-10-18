import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Page3() {
  const [key,setkey]=useState(2)


   
  function PunkSend(id){
    var b=key+id
    setkey(b)
    var a=`<div style="width: 80%;marginTop: 20px">`
    a+=`<span>`
    a+=`Пункт  `
    a+=key
    a+=`</span>`
    a+=`<br />`
    a+=`<input
    type="text"
    style="
    width: 70%;
    height: 40px;
    borderRadius: 3px;
    border: 1px solid gray;
    marginTop: 10px;
    "
    placeholder="Название промежуточного пункта"
    />`
    document.querySelector("#punk").innerHTML+=a
  }


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
              <span>Имя</span>
              <br />
              <input
                type="text"
                value=""
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  background:'#ececec',
                  marginTop: 10,
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <span>Имя</span>
              <br />
              <input
                value=""
                type="text"
                style={{
                  width: "70%",
                  height: 40,
                  borderRadius: 3,
                  border: "1px solid gray",
                  background:'#ececec',  
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
              <span>Получатель</span>
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
              <span>Адрес</span>
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
              <span>Адрес</span>
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
            <span>Email</span>
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
          <span>Email</span>
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
          <button
          onClick={()=>PunkSend(1)}
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
          </button> 
          <div id="punk" style={{ width: "75%", margin: "auto", marginTop: 30,height:'30vh',overflow:'scroll' }}>
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
