# USA Natural Disasters Map 
## [Demo](https://natural-disasters.herokuapp.com/)

This project is built using React.js and uses FEMA dataset for Natural Disasters in the USA.
It utilizes the Mapbox GL JS library via the [react-map-gl](https://github.com/uber/react-map-gl) package to render the map. 

The app allows you to apply year, incident type filter, or both, to view data visualized on the map. The icon markers indicate the types of disasters, their size depends on the number of incidents in each particular state. 

<img width="1276" alt="screen shot 2018-04-19 at 10 58 29 pm" src="https://user-images.githubusercontent.com/16231307/39033128-601a7774-4425-11e8-9d4d-90ec1d0a8205.png">

By clicking any marker on the map, you can see a more detailed information about the number of incidents in the state. 
<img width="1280" alt="screen shot 2018-04-19 at 10 58 42 pm" src="https://user-images.githubusercontent.com/16231307/39033129-624096b4-4425-11e8-800f-61a1b430087b.png">

The layout is created using Bootstrap and the API was built in Rails and is available [here](https://natural-disasters-api.herokuapp.com/api/disasters).


