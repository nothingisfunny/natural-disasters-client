# USA Natural Disasters Map 
## [Demo](https://natural-disasters.herokuapp.com/)

This project is built using React.js and uses FEMA dataset for Natural Disasters in the USA.
It utilizes the Mapbox GL JS library via the [react-map-gl](https://github.com/uber/react-map-gl) package to render the map. 

The app allows you to apply year, incident type filter, or both, to view data visualized on the map. The icon markers indicate the types of disasters, their size depends on the number of incidents in each particular state. 

<img width="1278" alt="screen shot 2018-04-19 at 10 37 23 pm" src="https://user-images.githubusercontent.com/16231307/39032683-69c7bd56-4423-11e8-91b7-f47696a03318.png">

By clicking any marker on the map, you can see a more detailed information about the number of incidents in the state. 
<img width="1280" alt="screen shot 2018-04-19 at 10 37 32 pm" src="https://user-images.githubusercontent.com/16231307/39032443-5e3b3720-4422-11e8-9c0b-e7f0944f823f.png">

The layout is created using Bootstrap and the API was built in Rails and is available [here](https://natural-disasters-api.herokuapp.com/api/disasters).
