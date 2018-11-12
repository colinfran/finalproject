import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';
import { Ionicons } from '@expo/vector-icons'; //https://ionicons.com/

import MapScreen from '../../../components/MapScreen';
import ListScreen from '../../../components/ListScreen';
import Geocoder from 'react-native-geocoding';

//---------------------------------------------------------------------------
Geocoder.init('AIzaSyDX-kRrpL4QR1x4L_NwpoV8HxK0ITx0wSQ'); // use a valid API key

// routes for MapList to switch between map and list
const ROUTES = {
	MapScreen, ListScreen
};

const ROUTESTACK = [
	{ text: <Ionicons name='ios-map' size={27} color={"#ffff"} />, title: 'MapScreen' },
	{ text: <Ionicons name='ios-list' size={27} color={"#ffff"} />, title: 'ListScreen' } // title is just the name of the Component being rendered.  See the renderScene property below
];

var data = [
  {
    title: "Rediculously Huge Fire in Rohnert Park",
    description: "description1",
    type: "fire",
    coordinates: { latitude: 38.364239, longitude: -122.72249 },
    key: "1ab",
    town: "",
    county: "",
    upVotes: 5,
    downVotes: 3,
    voteSelected: "",
		numComments: 4,
		commentData:[
			{id:1, name:"Frank", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:2, name:"John", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },
			{id:3, name:"Bob", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },
			{id:4, name:"Joe", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },
		],
		circles : 3,
  },
  {
    title: "Flooding in Rohnert Park Waterways",
    description: "description2",
    type: "flood",
    coordinates: { latitude: 38.346909, longitude: -122.675305 },
    key: "2ab",
    town: "",
    county: "",
    upVotes: 3,
    downVotes: 1,
    voteSelected: "up",
		numComments: 2,
		commentData:[
			{id:1, name:"Billy",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:2, name:"Carl",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
		],
		circles : 3,
  },
  {
    title: "House Fire in San Francisco",
    description: "description3",
    type: "fire",
    coordinates: { latitude: 37.798319, longitude: -122.417713 },
    key: "3as",
    town: "",
    county: "",
    upVotes: 4,
    downVotes: 2,
    voteSelected: "down",
		numComments: 0,
		commentData:[
		],
		circles : 3,
  },
  {
    title: "Physically Impossible Flood in San Francisco",
    description: "description4",
    type: "flood",
    coordinates: { latitude: 37.792986, longitude: -122.421484 },
    key: "4b",
    town: "",
    county: "",
    upVotes: 1,
    downVotes: 5,
    voteSelected: "",
		numComments: 3,
		commentData:[
			{id:1, name:"Kevin",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:2, name:"Jaycob",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:3, name:"Bill", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
		],
		circles : 3,
  },
  {
    title: "Apartment Fire in San Francisco",
    description: "description5",
    type: "fire",
    coordinates: { latitude: 37.765151, longitude: -122.429141 },
    key: "5ab",
    town: "",
    county: "",
    upVotes: 1,
    downVotes: 3,
    voteSelected: "down",
		numComments: 5,
		commentData:[
			{id:1, name:"Edward",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:2, name:"Joe",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:3, name:"Pete", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:4, name:"Steve", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },
			{id:5, name:"Jill", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },

		],
		circles : 3,
  },
  {
    title: "Small Flood in San Francisco",
    description: "description6",
    type: "flood",
    coordinates: { latitude: 37.774211, longitude: -122.401443 },
    key: "6a23",
    town: "",
    county: "",
    upVotes: 2,
    downVotes: 1,
    voteSelected: "up",
		numComments: 6,
		commentData:[
			{id:1, name:"Frank",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:2, name:"John",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:3, name:"Bob", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am"},
			{id:4, name:"Bob", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },
			{id:5, name:"Bob", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },
			{id:6, name:"Bob", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", time:"9:58 am" },

		],
		circles : 3,

  }
];

export var geocode = (data) => {
  Geocoder.from(data.coordinates.latitude, data.coordinates.longitude)
        .then(json => {
          var townComponent = json.results[0].address_components[2].long_name;
          var countyComponent = json.results[0].address_components[3].long_name;
          data.town = townComponent;
          data.county = countyComponent;

        })
        .catch(error => console.warn(error));
};

const defaultRegion = {
  latitude: 37.809489,
  longitude: -122.476551,
  latitudeDelta: 0.004,
  longitudeDelta: 0.004
};


export default class MapList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: data,
			isModalVisible: false,
			region: defaultRegion,
			selectedMarker: {
				title: "",
				description: "",
				type: "fire",
				coordinates: {
					latitude: 0,
					longitude: 0
				},
				key: ""
			},
			errorMessage: null,
		};
	}


	addGeocoding(data){
    for (var i = 0; i < data.length; i++){
      geocode(data[i]);
    }
  }

	componentWillMount() {
    this.addGeocoding(this.state.markers);
	}


	render() {
		return (
			<View style={{ flex: 1 }}>
				<TopBarNav
					routeStack={ROUTESTACK}
					renderScene={(route, i) => {
						// This is a lot like the now deprecated Navigator component
						let Component = ROUTES[route.title];
						return <Component defaultRegion={this.state.region} data={this.state.markers} index={i} />;
					}}
					headerStyle={[styles.headerStyle, { paddingTop: 30 }]}
					labelStyle={styles.labelStyle}
					underlineStyle={styles.underlineStyle}
					imageStyle={styles.imageStyle}
					sidePadding={40}
					inactiveOpacity={1}
					fadeLabels={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		borderBottomWidth: 1,
		borderColor: '#DCDCDC',
		backgroundColor: '#33ADFF'
	},
	labelStyle: {
		fontSize: 15,
		fontWeight: '500',
		color: '#fff'
	},
	imageStyle: {
		height: 20,
		width: 20,
		tintColor: '#e6faff'
	},
	underlineStyle: {
		height: 3.6,
		backgroundColor: '#e6faff',
		width: 40
	}
});
