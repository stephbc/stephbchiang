import React from 'react'

export const Resume = () => {
  return (
    <div className="resume">
      <div className="section-header">STEPHANIE CHIANG</div>
      <div className="section-body">
        <div>New York, NY</div>
        <div>
          <a href="mailto:stephaniebchiang@gmail.com">
            stephaniebchiang@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/stephaniebchiang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/stephaniebchiang
          </a>
        </div>
        <div>
          <a
            href="https://github.com/stephbc"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/stephbc
          </a>
        </div>
        <div>
          <a
            href="https://github.com/schiang-TE"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/schiang-TE
          </a>
        </div>
      </div>

      <div className="section-header">TECHNICAL SKILLS</div>
      <div className="section-body">
        <p>
          Proficient: Javascript, Node.js, Express, React, Redux, React Native /
          Expo, Git, HTML, CSS, Knockout
        </p>
        <p>
          Familiar: Java, Python, SQL / Sequelize, Phaser 3, Socket.IO, Mocha /
          Chai, Jasmine
        </p>
      </div>

      <div className="section-header">WORK EXPERIENCE</div>
      <div className="section-body">
        <div>
          <div>
            <b>TechEmpower - June 2021 to Present</b>
          </div>
          <div>Programmer I</div>
          <ul>
            <li>Contract developer on a cyber security reporting tool.</li>
            <li>Creating and developing features across the stack.</li>
            <li>Tailoring solutions per client needs and requests.</li>
          </ul>
        </div>
        <div>
          <div>
            <b>Gander & White Shipping - February 2017 to December 2019</b>
          </div>
          <div>
            Logistics and Gallery Import/Export Coordinator - Queens, NY
          </div>
          <ul>
            <li>
              Coordinated approx. 20 shipments weekly: arranged timelines with
              customers, agents and airlines, globally and simultaneously;
              calculated rates, scheduled bookings, dispatched truckers,
              arranged packaging, generated all documents for export, organized
              monthly consolidated shipments
            </li>
            <li>
              Arranged supervision and security escorts for high value and
              culturally significant cargo
            </li>
            <li>Compiled records for TSA compliance</li>
            <li>IATA Dangerous Goods: 60th DGR Certificate</li>
          </ul>
        </div>
        <div>
          <div>
            <b>EUSU Logistics - ​March 2015 to January 2017</b>
          </div>
          <div>Export Coordinator, Ocean & Air - Queens, NY</div>
          <ul>
            <li>
              Scheduled bookings, dispatched truckers, reserved equipment,
              arranged packing, coordinated with customers, agents and vendors
              for multiple shipments, globally and simultaneously
            </li>
            <li>
              Generated all documentation for export: instructions, releases,
              original Bills of Lading, invoicing
            </li>
          </ul>
        </div>
        <div>
          <div>
            <b>Kevin Kerveng Tung, PC ​- June 2010 to February 2015</b>
          </div>
          <div>Legal Assistant & Receptionist - Queens, NY</div>
          <ul>
            <li>
              Assisted and supported real estate department from contract review
              to post-closing
            </li>
            <li>
              Accounts receivable, tracked attorney hours for payroll;
              reception, data entry, office maintenance
            </li>
          </ul>
        </div>
      </div>

      <div className="section-header">PERSONAL PROJECTS</div>
      <div className="section-body">
        <div>
          <b>Totem​</b> - Solo Developer - March 2020
        </div>
        <a
          href="https://github.com/stephbc/TOTEM"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/stephbc/TOTEM
        </a>
        <div>
          Created a mobile application using React Native and Expo for music
          festivals and other events with large crowds to allow a user to create
          temporary “totems” and send location information.
        </div>
        <br />
        <div>
          <b>Super Quarantine Party​</b> - Developer - March 2020
        </div>
        <div>
          <a
            href="https://super-quarantine-party.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            super-quarantine-party.herokuapp.com/
          </a>
        </div>
        <div>
          <a
            href="https://github.com/2001-second-split/Quarantine-Party"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/2001-second-split/Quarantine-Party
          </a>
        </div>
        <div>
          A Mario-Party style multiplayer game, using Phaser 3 and Socket.IO. As
          one of four developers on this project, I helped create a minigame,
          sprites and a turn-based dice roll.
        </div>
      </div>

      <div className="section-header">EDUCATION</div>
      <div className="section-body">
        <p>
          <b>The Grace Hopper Program at Fullstack Academy, 2020</b> <br />An
          immersive software engineering program centered on full-stack
          JavaScript development, including Node.js, Express, Sequelize ORM for
          PostgreSQL databases, React and Redux; and CS fundamentals.
        </p>
        <p>
          <b>Queens College of the City University of New York, 2005 - 2009</b>{' '}
          <br />Bachelor of Arts in Media Studies and Film Studies <br />
        </p>
      </div>
    </div>
  )
}
