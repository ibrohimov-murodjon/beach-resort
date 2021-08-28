import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaSmoking } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quasi perferendis?",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quasi perferendis?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quasi perferendis?",
      },
      {
        icon: <FaSmoking />,
        title: "No smoking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quasi perferendis?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
