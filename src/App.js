import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

import HomePage from './pages/homepage/homepage.component' 
import Weather from './pages/weather/weather.component'
import WeatherSearch from './pages/weather-search/weather-search.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const App = props => {

	const {setCurrentUser, currentUser} = props 
	const [coords, setCoords] = useState()

	let unsubscribeFromAuth = null 

	

	// mounting hook
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			async ({coords: {latitude, longitude}}) => {
				setCoords({
					lat: latitude,
					lon: longitude
				})
			}
		)
	
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

	console.log(coords)

	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/weather/:hexLat/:hexLon" component={WeatherSearch} /> 
				<Route exact path='/signin' component={SignInAndSignUp} />
			</Switch>
		</div>
		
	)

	// return (
	// 	<div className="app">
	//  			<Switch>
	//  				<Route exact path="/" render={props => coords ? 
	// 				 	(<Weather {...props} lat={coords.lat} lon={coords.lon} />)
	// 					: (<HomePage />)} 
	// 				/>


	//  				<Route exact path="/weather/:hexLat/:hexLon" component={WeatherSearch} /> 


	//               	<Route exact path='/signin' render={() => currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp />)} />
	//  			</Switch>
	//  		</div>
	// )
	
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
