module.exports = {
    future: {
      webpack5: true,
    },
    images: {
      loader: 'cloudinary',
      path: '	https://res.cloudinary.com/wshfc/image/upload/',
    },
    env: {
      WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
      WEATHER_API_KEY: 'ed74b2f72f320ecf5d07795f1fbdbc0c',
      WEATHER_ICON_URL: 'https://openweathermap.org/img/w',

    },
  }