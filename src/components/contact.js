import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body"> 
				<Grid className="contact-grid"> 
					<Cell col={6}>
						<h2> Daniel Eduard Andal </h2>
						<img 
							src={process.env.PUBLIC_URL + '/avatar.png'} 
							alt="avatar"
							style={{height: '250px'}}
						/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> I wanna be the very best like no one ever was. To catch them is my real test
						To train them is my cause. I will travel across the land searching far and wide. Teach Pokémon to understand the power that's inside </p>
					</Cell>
					<Cell col={6}>
						<h2> Contact Me </h2>
						<hr/>

						<div className="contact-list"> 
							<List>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										+6391655876221
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
										<i className="fa fa-envelope" aria-hidden="true" />
										andaldanieleduard@yahoo.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
										<i className="fa fa-linkedin-square" aria-hidden="true" />
										ph.linkedin.com/in/daniel-eduard-andal-6976a247
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;