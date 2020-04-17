import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import AuthedRoute from './AuthedRoute'
import NotFound from './NotFound'

class App extends Component {
  
    componentDidMount() {
        const { dispatch, loading } = this.props

        if(loading === true) {
          dispatch(handleInitialData())
        }
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar/>
                    <div>
                      <LoadingBar/>
                      { this.props.loading === true
                        ? 
                          null
                        : 
                          <div>
                            <Switch>
                              <Route path='/login' exact component={Login} />
                              <AuthedRoute path='/' exact component={Home} />
                              <AuthedRoute path='/add' exact component={NewQuestion} />
                              <AuthedRoute path='/questions/:question_id' exact component={Poll} />
                              <AuthedRoute path='/leaderboard' exact component={LeaderBoard} />
                              <Route component={NotFound}/>
                            </Switch>
                          </div>
                     }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({users}) {
    return {
      loading: isEmpty(users)
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false
    }

    return true
}

export default connect(mapStateToProps)(App)