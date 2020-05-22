import React from 'react'
// import { PDFViewer, Page, Text, View, Document } from '@react-pdf/renderer';

export const Resume = () => {
  return (
    <div className="resume">
      <h4>STEPHANIE CHIANG</h4>
      <p>New York, NY</p>
      <a href="mailto:stephaniebchiang@gmail.com">stephaniebchiang@gmail.com</a>
      <br />
      <a
        href="https://www.linkedin.com/in/stephaniebchiang/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/stephaniebchiang
      </a>
      <br />
      <a
        href="https://github.com/stephbc"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/stephbc
      </a>
      <br />

      <h4>TECHNICAL SKILLS</h4>
      <p>
        Proficient: Javascript, Node.js, Express, React, Redux, React Native /
        Expo, Git, HTML, CSS
      </p>
      <p>
        Familiar: SQL / Sequelize, Phaser 3, Socket.IO, Mocha / Chai, Jasmine
      </p>

      <h4>PROJECTS</h4>
      <p>
        <b>Super Quarantine Party​</b> - Developer - March 2020
        <br />
        <a
          href="https://super-quarantine-party.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>https://super-quarantine-party.herokuapp.com/</b>
        </a>
        <br />
        <a
          href="https://github.com/2001-second-split/Quarantine-Party"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>https://github.com/2001-second-split/Quarantine-Party</b>
        </a>
        <br />A Mario-Party style multiplayer game, using Phaser 3 and
        Socket.IO. As one of four developers on this project, I helped create a
        minigame, sprites and a turn-based dice roll.
      </p>
      <p>
        <b>Totem​</b> - Solo Developer - March 2020
        <br />
        <a
          href="https://github.com/stephbc/TOTEM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>​github.com/stephbc/TOTEM</b>
        </a>
        <br />Created a mobile application using React Native and Expo for music
        festivals and other events with large crowds to allow a user to create
        temporary “totems” and send location information.
      </p>
      <p>
        <b>Bottled Up</b> - Developer - March 2020
        <br />
        <a
          href="https://github.com/stephbc/BottledUp2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>​github.com/stephbc/BottledUp2 (updated version)</b>
        </a>
        <br />A sample eCommerce site built using Node.js, Express, React,
        Redux, Sequelize and PostGreSQL. As one of four developers on this
        project, I worked on the Express routes, React forms and admin features.
      </p>

      <h4>WORK EXPERIENCE</h4>
      <p>
        <b>Gander & White Shipping - February 2017 to December 2019</b>
        <br />Logistics and Gallery Import/Export Coordinator - Queens, NY
        <br />
        <br />- Coordinated up to 20 shipments weekly: arranged timelines with
        customers, agents and airlines, globally and simultaneously; calculated
        rates, scheduled bookings, dispatched truckers, arranged packaging,
        generated all documents for export, organized monthly consolidated
        shipments
        <br />- Arranged supervision and security escorts for high value and
        culturally significant cargo - Compiled records for TSA compliance; IATA
        Dangerous Goods: 60th DGR Certificate
      </p>
      <p>
        <b>EUSU Logistics - ​March 2015 to January 2017</b>
        <br />Export Coordinator, Ocean & Air - Queens, NY
        <br />
        <br />- Scheduled bookings, dispatched truckers, reserved equipment,
        arranged packing, coordinated with customers, agents and vendors for
        multiple shipments, globally and simultaneously
        <br />- Generated all documentation for export: instructions, releases,
        original Bills of Lading, invoicing
      </p>
      <p>
        <b>Kevin Kerveng Tung, PC ​- June 2010 to February 2015</b>
        <br />Legal Assistant & Receptionist - Queens, NY
        <br />
        <br />- Assisted and supported real estate department from contract
        review to post-closing
        <br />- Accounts receivable, tracked attorney hours for payroll;
        reception, data entry, office maintenance
      </p>

      <h4>EDUCATION</h4>
      <p>
        <b>The Grace Hopper Program at Fullstack Academy, 2020</b> <br />An
        immersive software engineering program centered on full-stack JavaScript
        development, including Node.js, Express, Sequelize ORM for PostgreSQL
        databases, React and Redux; and CS fundamentals.
      </p>
      <p>
        <b>Queens College of the City University of New York, 2005 - 2009</b>{' '}
        <br />Bachelor of Arts in Media Studies and Film Studies <br />
      </p>
    </div>
  )
}
