import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          CompleteTab: {
            screens: {
              CompleteScreen: 'one',
            },
          },
          AddTab: {
            screens: {
              AddScreen: 'two',
            },
          },
          ActiveTab: {
            screens: {
              ActiveScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
