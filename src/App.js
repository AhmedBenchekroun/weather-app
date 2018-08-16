import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "da2ec68c3f24e6a1975eeb545407936e";


class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ','+ country + '&appid=' + API_KEY + "&units=metrics");
        const data = await apiCall.json();
        console.log(JSON.stringify(data));
    }

    render() {
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;