import React from 'react';
import Header from "./Header";
import contact from "./Contact";
import data from "./yourata";

const About = () => {
    return (
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <div className="about_container">
        <h1>{data.aboutTitle}</h1>
        <p>{data.aboutPara}</p>








    </div>


}