import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";

const API_KEY = "da2ec68c3f24e6a1975eeb545407936e";


class App extends React.Component {
    getWeather = async () => {
        const apiCall = await fetch(`api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=${API_KEY}&units=metrics`)
    }

    render() {
        return(
            <div>
                <Titles />
                <Form/>
                <Weather/>
            </div>
        );
    }
}

export default App;