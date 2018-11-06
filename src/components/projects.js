import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
					{/* REACT PROJECT #1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
						<CardTitle style={{color: '#fff', height: '176px', background: 
						'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}> 
							React Project #1 
						</CardTitle>
						<CardText> 
							This is my first react project!
						</CardText>
						<CardActions> 
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{colord: '#fff'}}> 
							<IconButton name="share"/>
						</CardMenu>
					</Card>

					{/* REACT PROJECT #2 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
						<CardTitle style={{color: '#fff', height: '176px', background: 
						'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}> 
							React Project #2 
						</CardTitle>
						<CardText> 
							This is my second react project!
						</CardText>
						<CardActions> 
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{colord: '#fff'}}> 
							<IconButton name="share"/>
						</CardMenu>
					</Card>

					{/* REACT PROJECT #3 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
						<CardTitle style={{color: '#fff', height: '176px', background: 
						'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}> 
							React Project #3 
						</CardTitle>
						<CardText> 
							This is my third react project!
						</CardText>
						<CardActions> 
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{colord: '#fff'}}> 
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>		
			)
		} else if(this.state.activeTab === 1){
			return(
				<div className="projects-grid">
					{/* HTML PROJECT #1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
						<CardTitle style={{color: '#fff', height: '176px', background: 
						'url(http://mktcdn.uberflip.com/html-css.png) center / cover'}}> 
							HTML Project #1 
						</CardTitle>
						<CardText> 
							This is my first react project!
						</CardText>
						<CardActions> 
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{colord: '#fff'}}> 
							<IconButton name="share"/>
						</CardMenu>
					</Card>

					{/* HTML PROJECT #2 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
						<CardTitle style={{color: '#fff', height: '176px', background: 
						'url(http://mktcdn.uberflip.com/html-css.png) center / cover'}}> 
							HTML Project #2
						</CardTitle>
						<CardText> 
							This is my second react project!
						</CardText>
						<CardActions> 
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{colord: '#fff'}}> 
							<IconButton name="share"/>
						</CardMenu>
					</Card>

					{/* HTML PROJECT #3 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
						<CardTitle style={{color: '#fff', height: '176px', background: 
						'url(http://mktcdn.uberflip.com/html-css.png) center / cover'}}> 
							HTML Project #3 
						</CardTitle>
						<CardText> 
							This is my third react project!
						</CardText>
						<CardActions> 
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{colord: '#fff'}}> 
							<IconButton name="share"/>
						</CardMenu>
					</Card>
				</div>
			)
		}
		else if(this.state.activeTab === 2){
			return(
				<div> <h1> This is CSS </h1> </div>
			)
		}
		else if(this.state.activeTab === 3){
			return(
				<div> <h1> This is Elixir </h1> </div>
			)
		}
	}

	render() {
		return(
				<div className="category-tabs"> 
					<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
						<Tab> React </Tab>
						<Tab> HTML </Tab>
						<Tab> CSS </Tab>
						<Tab> Elixir </Tab>
					</Tabs>

					<Grid>
						<Cell col={12}>
							<div className="content"> 
								{this.toggleCategories()}
							</div>
						</Cell>
					</Grid>
				</div>
		)
	}
}

export default Project;