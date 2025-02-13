import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          All: {
            screens: {
              AllTodoScreen: 'one',
            },
          },
          Completed: {
            screens: {
              CompleteScreen: 'two',
            },
          },
          AddTab: {
            screens: {
              AddScreen: 'three',
            },
          },
          Active: {
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
