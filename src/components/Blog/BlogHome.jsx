import React from "react";
import Slide from "../Slide/Slide";
import Card from "./Card";
import CardTwo from "./CardTwo";
import Footer from "../Footer/Footer";

const data = [
  {
    id: 1,
    titleOne: "YOU CAN CHANGE THE WORLD",
    titletwo: "STRONG STYLE",
    paraOne: "How to Outgrow Yourself",
    paraTwo: "New Ways to Wear Classic make a Comeback",
    name: "By Gerges Nashaat",
    subTitle: "How to Find Your Soulmate",
    qrCode: "/images/qrcode.png",
    cover: "/images/blog5.jpg",
  },
];
const BlogHome = () => {
  return (
    <>
      <section className="home">
        <div className="left-content">
          {data.map((value) => {
            return (
              <div className="content" key={value.id}>
                <div className="logo">
                  <h1>G</h1>
                </div>
                <div className="home-img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>
                <div className="text text2">
                  <h1>{value.titletwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>

                <div className="qrcode">
                  <img src={value.qrCode} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <Slide />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
