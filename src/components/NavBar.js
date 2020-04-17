import React, {Component} from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { NavLink, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/authedUser'
var logo = require('../utils/icons/React-Redux.jpeg')

class Navbar extends Component {

    handleLogout = (e, { name }) =>{
      	e.preventDefault()
        
      	const { history } = this.props
        
        if(name === 'logOut'){
            this.props.dispatch(logOut())
            history.push('/login')
        }
    }

    handleDropdownLogoutClick = (e, {name}) => {
        e.preventDefault()
      
        const {history} = this.props

        this.props.dispatch(logOut())
        history.push('/login')
    }

    render() {
        const { authedUser, users } = this.props
        const user = users[authedUser]

        return(
        	<div display="bloack">
               <Menu size='large'  inverted >
                  <Menu.Item as={NavLink} name='home' exact to='/' color='teal' >
                      Home
                  </Menu.Item>
                  <Menu.Item as={NavLink} name='newQuestion' exact to='/add' color='teal'>
                      New Question
                  </Menu.Item>
                  <Menu.Item as={NavLink} name='leaderBoard' exact to='/leaderboard' color='teal'>
                      Leader Board
                  </Menu.Item>
                   {authedUser 
                    ?
                    <Menu.Menu position='right'>
                      <Menu.Item name='username' >
                          Hello {user.name}
                      </Menu.Item>
                      <Image style={{marginTop:'0.35em'}} avatar src={user!== 'undefined' ? user.avatarURL : logo}/>
                      <Menu.Item as={NavLink} name='logOut' exact to='/login' color='teal' onClick={this.handleLogout}>
                         Log Out
                      </Menu.Item>
                    </Menu.Menu>
					: 
				    <div></div>}
               </Menu>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        authedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))