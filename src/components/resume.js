import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import component from './pp.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={12}>
            <div style={{textAlign: 'center'}}>
              <img
                src= "pp.jpg"
                alt="logo"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Zan Hendricks</h2>
            <h4 style={{color: 'grey'}}>Front-End Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>I am a committed, hardworking and dedicated individual. I have a strong work ethic and do my best to achieve goals I have set for myself. I have a desire to become a qualified front end web developer and explore more in the IT field.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>3 St Ursula Street, Seawinds</p>
            <h5>Phone</h5>
            <p>0621486579</p>
            <h5>Email</h5>
            <p>hendrickszan@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={12}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2017}
              schoolName="Steeenberg High School"
              schoolDescription="Matriculated"
               />

               <Education
                 startYear={2020}
                 schoolName="Life Choices Academy"
                 schoolDescription="6 Months Coding Bootcamp"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={70}
                />
                <Skills
                  skill="JAVASCRIPT"
                  progress={60}
                  />
                    <Skills
                      skill="PYTHON"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
