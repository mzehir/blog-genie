import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = ({initialRouteName, screens, screenOptions = {}}) => {
  const {tabBarShowLabel, tabBarStyle} = screenOptions;
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        //* tabBar'daki metni false ise görünmez yapar.
        // tabBarShowLabel: false,
        ...(typeof tabBarShowLabel === 'boolean'
          ? {tabBarShowLabel: tabBarShowLabel}
          : {}),

        tabBarStyle: {
          //* tabBar yüksekliği...
          // height: 70,
          ...(tabBarStyle?.height ? {height: tabBarStyle.height} : {}),

          //* Köşe yarıçapı...
          // borderRadius: 16,
          ...(tabBarStyle?.borderRadius
            ? {borderRadius: tabBarStyle.borderRadius}
            : {}),

          //* tabBar'a arkaplan rengi verir.
          // background: 'rgba(255, 255, 255, 0.4)',
          ...(tabBarStyle?.background
            ? {background: tabBarStyle.background}
            : {}),

          //* Gölge rengi ve opaklığı...
          // shadowColor: 'rgba(111, 111, 111, 0.12)',
          ...(tabBarStyle?.shadowColor
            ? {shadowColor: tabBarStyle.shadowColor}
            : {}),

          //* Gölge boyutu ve yönü...
          // shadowOffset: {width: 0, height: 2},
          ...(tabBarStyle?.shadowOffset
            ? {shadowOffset: tabBarStyle.shadowOffset}
            : {}),

          //* Gölge opaklığı...
          // shadowOpacity: 1,
          ...(tabBarStyle?.shadowOpacity
            ? {shadowOpacity: tabBarStyle.shadowOpacity}
            : {}),

          //* Gölge yarıçapı...
          // shadowRadius: 4,
          ...(tabBarStyle?.shadowRadius
            ? {shadowRadius: tabBarStyle.shadowRadius}
            : {}),
        },
      }}>
      {screens.map((item, index) => (
        <Tab.Screen
          key={index.toString()}
          name={item.name}
          component={item.component}
          options={{
            //* appBar için özel başlık...
            // title: 'Home',
            ...(item.options?.title ? {title: item.options.title} : {}),

            //* appBar başlığı için renk...
            // headerTintColor: 'red',
            ...(item.options?.headerTintColor
              ? {headerTintColor: item.options.headerTintColor}
              : {}),

            //* appBar başlığını detaylı özelleştirme...
            ...(item.options?.headerStyle
              ? {
                  headerStyle: {
                    //* appBar arkaplan rengi...
                    // backgroundColor: 'yellow',
                    ...(item.options.headerStyle?.backgroundColor
                      ? {
                          backgroundColor:
                            item.options.headerStyle.backgroundColor,
                        }
                      : {}),
                  },
                }
              : {}),

            //* appBar başlığı metnini detaylı özelleştirme...
            ...(item.options?.headerTitleStyle
              ? {
                  headerTitleStyle: {
                    //* Başlık yazı kalınlığı...
                    // fontWeight: 'bold',
                    ...(item.options.headerTitleStyle?.fontWeight
                      ? {
                          fontWeight: item.options.headerTitleStyle.fontWeight,
                        }
                      : {}),
                  },
                }
              : {}),

            tabBarIcon: ({size, focused}) =>
              focused ? (
                <item.options.tabBarIconFocused width={size} height={size} />
              ) : (
                <item.options.tabBarIcon width={size} height={size} />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
