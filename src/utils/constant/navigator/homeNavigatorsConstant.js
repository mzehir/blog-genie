import HomeView from '../../../view/home/Home';
import DiscoveryView from '../../../view/discovery/Discovery';
import BookmarkView from '../../../view/bookmark/Bookmark';
import ProfileView from '../../../view/profile/Profile';

import HomeSvg from '../../../assets/icons/home.svg';
import DiscoverySvg from '../../../assets/icons/discovery.svg';
import BookmarkSvg from '../../../assets/icons/bookmark.svg';
import ProfileSvg from '../../../assets/icons/profile.svg';
import HomeActiveSvg from '../../../assets/icons/homeActive.svg';
import DiscoveryActiveSvg from '../../../assets/icons/discoveryActive.svg';
import BookmarkActiveSvg from '../../../assets/icons/bookmarkActive.svg';
import ProfileActiveSvg from '../../../assets/icons/profileActive.svg';

export const HOME_NAVIGATORS = {
  HOME: {
    name: 'home',
    component: HomeView,
    options: {
      title: 'Home',
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarIcon: HomeSvg,
      tabBarIconFocused: HomeActiveSvg,
    },
    initialRouteName: true,
  },

  DISCOVERY: {
    name: 'discovery',
    component: DiscoveryView,
    options: {
      title: 'Discovery',
      tabBarIcon: DiscoverySvg,
      tabBarIconFocused: DiscoveryActiveSvg,
    },
  },

  BOOKMARK: {
    name: 'bookmark',
    component: BookmarkView,
    options: {
      title: 'Bookmark',
      tabBarIcon: BookmarkSvg,
      tabBarIconFocused: BookmarkActiveSvg,
    },
  },

  PROFILE: {
    name: 'profile',
    component: ProfileView,
    options: {
      title: 'Profile',
      tabBarIcon: ProfileSvg,
      tabBarIconFocused: ProfileActiveSvg,
    },
  },
};

export const getHomeNavigatorsConstantAsArray = () => {
  let initialRouteName = '';
  let screens = [];

  for (const key in HOME_NAVIGATORS) {
    const navigator = HOME_NAVIGATORS[key];

    if (navigator.initialRouteName) {
      initialRouteName = navigator.name;
    }

    screens.push({
      name: navigator.name,
      component: navigator.component,
      options: navigator.options,
      ...(navigator.initialParams
        ? {initialParams: navigator.initialParams}
        : {}),
    });
  }

  return {initialRouteName, screens};
};
