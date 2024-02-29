import WelcomeView from '../../../view/auth/welcome/Welcome';
import RegisterView from '../../../view/auth/register/Register';
import LoginView from '../../../view/auth/login/Login';

import HomeNavigator from '../../../navigators/HomeNavigator';
import AuthLayout from '../../../layout/AuthLayout';

export const INITIAL_NAVIGATORS = {
  WELCOME: {
    name: 'welcome',
    component: WelcomeView,
    options: {
      headerShown: false,
    },
    initialRouteName: true,
  },

  REGISTER: {
    name: 'register',
    component: RegisterView,
    layout: AuthLayout,
  },

  LOGIN: {
    name: 'login',
    component: LoginView,
    layout: AuthLayout,
  },

  HOME_NAVIGATOR: {
    name: 'home-navigator',
    component: HomeNavigator,
  },
};

export const getInitialNavigatorsConstantAsArray = () => {
  let initialRouteName = '';
  let screens = [];

  for (const key in INITIAL_NAVIGATORS) {
    const navigator = INITIAL_NAVIGATORS[key];

    if (navigator.initialRouteName) {
      initialRouteName = navigator.name;
    }

    screens.push({
      name: navigator.name,

      component: navigator.component,

      ...(navigator.layout ? {layout: navigator.layout} : {}),

      ...(navigator.options ? {options: navigator.options} : {}),

      ...(navigator.initialParams
        ? {initialParams: navigator.initialParams}
        : {}),
    });
  }

  return {initialRouteName, screens};
};
