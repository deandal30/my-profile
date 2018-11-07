import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div> 
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img 
								src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png"
								alt="avatar"
								style={{height: "300px"}}
							/>
						</div>
							<h2 style={{paddingTop: '2em'}}> Daniel Eduard Andal </h2>
							<h4 style={{color: 'grey'}}> Programmer </h4>
							<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
							<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
								when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
								It has survived not only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. </p>
							<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
							<h5>Address</h5>
							<p>B18 L1 Cambridge Place, Brgy. Darasa, Tanauan City, Batangas</p>
							<h5>Phone</h5>
							<p>(0916) 558-7621</p>
							<h5>Email</h5>
							<p>andaldanieleduard@yahoo.com</p>
							<h5>Website</h5>
							<p>deandal30@github.io</p>
							<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
					</Cell>
					<Cell className="resume-right-col" col={8}> 
						<h2> Education </h2>
							<Education
								startYear={2013}
								endYear={2017}
								schoolName="STI College Tanauan"
								schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
							/>

							<Education
								startYear={2009}
								endYear={2013}
								schoolName="Bernardo Lirio Memorial National HighSchool"
								schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
							/>
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2> Experience </h2>

							<Experience
								startYear="2017 June"
								endYear="Present"
								jobName="Medilink Network Inc."
								jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
							/>

							<Experience
								startYear="2017 June"
								endYear="Present"
								jobName="Nexperia Philippines Semiconductor."
								jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
							/>
						
						<hr style={{borderTop: '3px solid #e22947'}} />

						<h2> Skills </h2>

							<Skills
								skill="Javascript"
								progress={80}
							/>

							<Skills
								skill="HTML/CSS"
								progress={90}
							/>

							<Skills
								skill="Elixir"
								progress={50}
							/>

							<Skills
								skill="ReactJS"
								progress={70}
							/>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;