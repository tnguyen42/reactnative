'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var Orientation = require('react-native-orientation');

var {
	StyleSheet,
	Text,
	Component,
	AppRegistry,
	NavigatorIOS,
	TouchableHighlight,
} = React;

class PropertyFinderApp extends Component {

	componentDidMount () {
		console.log(Orientation);
		Orientation.shouldRotate(0);
	}

// ------------------------------ Render Here
	render () {

		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Property Finder',
					component: SearchPage,
				}}
			/>
		);
	}
}

var styles = StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80,
	},
	container: {
		flex: 1,
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
});

AppRegistry.registerComponent('PropertyFinder', function() {return PropertyFinderApp});
