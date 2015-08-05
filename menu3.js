'use strict';

var React = require('react-native');
var Homepage = require('./homepage');
var WorldView = require('./worldview');
var Friends = require('./friends');
var Settings = require('./settings');

var {
	StyleSheet,
	Text,
	View,
	Image,
	Component,
	ListView,
} = React;

class Menu extends Component {

	constructor(props: any) {
		super(props);

		var menuItems = [
			{
				title: "Homepage",
				function: this.homepage.bind(this),
				active: true,
			},
			{
				title: "World View",
				function: this.worldview.bind(this),
				active: false,
			},
			{
				title: "Friends",
				function: this.friends.bind(this),
				active: false,
			},
			{
				title: "Settings",
				function: this.settings.bind(this),
				active: false,
			},
		]

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state = {
			dataSource: ds.cloneWithRows(menuItems),
			menuItems: menuItems,
		};
	}

	activateSection(number) {
		var ret = this.state.menuItems;
		for (var i = 0 ; i <= 3 ; i++)
			ret[i].active = false;
		ret[number].active = true;
		return (ret);
	}

	homepage() {
		this.props.navigate({
			title: 'Homepage',
			component: Homepage,
		});
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.activateSection(0)),
		});
		console.log(this.state.dataSource._dataBlob);
	}

	worldview() {
		this.props.navigate({
			title: 'World View',
			component: WorldView,
		});
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.activateSection(1)),
		});
		console.log(this.state.dataSource._dataBlob);
	}

	friends() {
		this.props.navigate({
			title: 'Friends',
			component: Friends,
		});
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.activateSection(2)),
		});
		console.log(this.state.dataSource._dataBlob);
	}

	settings() {
		this.props.navigate({
			title: 'Settings',
			component: Settings,
		});
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.activateSection(3)),
		});
		console.log(this.state.dataSource._dataBlob);
	}

	menuStyle(active) {
		if (active == true)
			return (styles.activeSection);
		return (styles.section);
	}

	renderItem(rowData) {

		return (
			<View style={styles.menuItem}>
				<Image
					source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
					style={styles.menuIcon} ></Image>
				<Text
					style={this.menuStyle(rowData.active)}
					onPress={rowData.function} >
					{rowData.title}
				</Text>
			</View>
		)
	}

	render () {
		return (
			<View style={styles.container}>
				<ListView
					dataSource = {this.state.dataSource}
					style      = {styles.listView}
					renderRow  = {this.renderItem.bind(this)}
				/>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3F51B5',
		flexDirection: 'column',
		paddingTop: 25
	},
	sideMenu: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 15,
	},
	section: {
		color: 'blue',
	},
	activeSection: {
		color: 'red',
	},
	menuItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	menuIcon: {
		height: 30,
		width: 30,
	},
	listView: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
  },
});

module.exports = Menu;
