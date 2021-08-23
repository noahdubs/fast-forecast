import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

import HomePage from './pages/homepage/homepage.component' 
import Weather from './pages/weather/weather.component'

const App = props => {

	const {setCurrentUser, currentUser} = props 

	let unsubscribeFromAuth = null 

	// mounting hook
	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					})
				})
			}
			setCurrentUser(userAuth)
		})
	}, [])

	// unmounting hook
	useEffect(() => {
		return () => {
			unsubscribeFromAuth()
			console.log("unsubbed")
		}
	}, [])

	console.log(currentUser)
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={currentUser ? Weather : HomePage} />
			</Switch>
		</div>
	)
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
