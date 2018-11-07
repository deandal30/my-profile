import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> My Portfolio </Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer className="header-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"> My Portfolio </Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>

						{/* FOOTER */}
						<Footer size="mega" className="footer-bg">
							<FooterSection type="bottom" logo="Daniel Eduard Andal">
									<FooterLinkList>
											<a href="https://github.com/deandal30">Help</a>
											<a href="https://github.com/deandal30">Privacy & Terms</a>
									</FooterLinkList>
							</FooterSection>
						</Footer>
        </Layout>
				
    </div>
    );
  }
}

export default App;
