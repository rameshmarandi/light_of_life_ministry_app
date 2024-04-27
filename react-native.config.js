module.exports = {
    assets: ['./assets/fonts'],
    project: {
        ios: {},
        android: {},
    },
    dependencies: {
      'react-native-vector-icons': {
        platforms: {
          ios: null,
        },
      },
    //   ...(process.env.NO_FLIPPER == '1'
    //     ? {
    //         'react-native-flipper': {platforms: {ios: null}},
    //       }
    //     : {}),
    },
  };
  