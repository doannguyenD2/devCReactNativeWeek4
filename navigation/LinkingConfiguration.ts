import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          AllTodoTab: {
            screens: {
              AllTodoScreen: 'one',
            },
          },
          CompleteTab: {
            screens: {
              CompleteScreen: 'two',
            },
          },
          AddTab: {
            screens: {
              AddScreen: 'three',
            },
          },
          ActiveTab: {
            screens: {
              ActiveScreen: 'four',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
