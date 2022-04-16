import React from "react";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <div className="grids">
      <Head>
        <title>About</title>
      </Head>
      <section className="pcards" id="webdev">
        <p>Web developer</p>
        <a
          href="https://github.com/pro-grammer206"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/github.svg" width={40} height={40} alt="giticon" />
        </a>
      </section>
      <section className="pcards">
        <p>Web Technologies used</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </section>
      <section className="pcards">
        <p>Javascript frontends used</p>
        <ul>
          <li>Jquery</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </section>
      <section className="pcards">
        <p>Nodejs framework used</p>
        <ul>
          <li>Express</li>
        </ul>
      </section>
      <section className="pcards">
        <p>CSS Libraries used</p>
        <ul>
          <li>Bootstrap</li>
          <li>Tailwindcss</li>
          <li>Chakra UI</li>
        </ul>
      </section>
      <section className="pcards">
        <p>React Animation libraries used</p>
        <ul>
          <li>React Spring</li>
          <li>Framer motion</li>
        </ul>
      </section>
      <section className="pcards">
        <p>Databases familiar with</p>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </section>
      <section className="pcards">
        <p>Headless CMS used</p>
        <ul>
          <li>Contentful</li>
          <li>GraphCMS</li>
        </ul>
      </section>
    </div>
  );
};

export default about;
