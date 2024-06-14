export const screenOptions = {
  headerShown: false,
  animationEnabled: true,
};

export const transitionCard = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        opacity: current.progress,
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
