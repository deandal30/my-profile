import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}> 
						<img 
							src={process.env.PUBLIC_URL + '/avatar.png'} 
							/* src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png" */
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text"> 
							<h1> Full Stack Web Developer </h1>
						<hr/>
						
						<p> HTML/CSS/SASS | Bootstrap | Semantic UI | JavaScript | JQuery | React | Elixir (Phoenix Framework) </p>
						
							<div className="social-links"> 

								{/* LinkedIn */}
								<a href="https://ph.linkedin.com/in/daniel-eduard-andal-6976a247" rel="noopener noreferer" target="_blank"> 
									<i className="fa fa-linkedin-square" aria-hidden="true" /> 
								</a>
								{/* GitHub */}

								<a href="https://github.com/deandal30" rel="noopener noreferer" target="_blank"> 
									<i className="fa fa-github-square" aria-hidden="true" /> 
								</a>

								{/* Freecodecamp */}
								<a href="https://www.freecodecamp.org/fcc23876f06-1ddb-4e06-8f0d-3a3800a9682d" rel="noopener noreferer" target="_blank"> 
									<i className="fa fa-free-code-camp" aria-hidden="true" /> 
								</a>

								{/* Facebook */}
								<a href="http://facebook.com/deandal30" rel="noopener noreferer" target="_blank"> 
									<i className="fa fa-facebook-square" aria-hidden="true" /> 
								</a>
							</div>
						</div>
					</Cell>
				</Grid>

				<Grid className="landing-grid">
					<Cell col={1}>
					</Cell>
					<Cell col={6}>
						<h1 style={{display: 'block'}}> . </h1>
					</Cell>
					<Cell col={4}>
						<h1 style={{display: 'none'}}> . </h1>
					</Cell>
					<Cell col={1}>
					</Cell>
				</Grid>
			</div>
			
		)
	}
}

export default Landing;