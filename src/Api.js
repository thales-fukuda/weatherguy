import axios from 'axios';

const ID = 'fac9a302f3d95aafe7a9f7d7596aff1f';

class Api {
  currentWeather = async city => axios(
    {
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ID}`,
      headers: {
        Accept: 'application/json',
      },
    },
  );
}

export default new Api();
