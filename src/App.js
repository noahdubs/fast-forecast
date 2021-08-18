import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

const App = props => {
	// destructure 
	const {setCurrentUser, currentUser} = props 

	let unsubscribeFromAuth = null 

	// mounting hook
	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async useAuth => {
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
	})

	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
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
