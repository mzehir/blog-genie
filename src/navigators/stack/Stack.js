import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@emotion/react';

const Stack = createNativeStackNavigator();

const StackNavigator = ({initialRouteName, screens, screenOptions = {}}) => {
  const theme = useTheme();
  const navigationHook = useNavigation();
  const {headerLeft, ...otherScreenOptions} = screenOptions;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.header.background,
        },

        ...(headerLeft
          ? {
              headerLeft: navigation => headerLeft(navigation, navigationHook),
            }
          : {}),

        ...otherScreenOptions,
      }}>
      {screens.map((item, index) => (
        <Stack.Screen
          key={index.toString()}
          name={item.name}
          {...(item.initialParams ? {initialParams: item.initialParams} : {})}
          options={{
            ...(typeof item.options?.headerShown === 'boolean'
              ? {headerShown: item.options?.headerShown}
              : {}),

            ...item.options,
          }}>
          {item.layout
            ? props => (
                <item.layout>
                  <item.component {...props} />
                </item.layout>
              )
            : props => <item.component {...props} />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
