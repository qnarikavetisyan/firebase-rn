import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {GlobalStyles} from '../globalStyles';

export const BottomTabContent = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  let isHome = false;

  state.routes.map((route, index) => {
    const isFocused = state.index === index;

    if (isFocused) {
      isHome = !route.state ? true : route.state.index === 0;
    }
  });

  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          paddingVertical: 5,
          backgroundColor: '#fff',
          elevation: 10,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              if (route.name === 'card') {
                navigation.navigate(route.name, {screen: 'templates'});
              } else {
                navigation.navigate(route.name);
              }
            }
          };
          let component = null;
          switch (route.name) {
            case 'main':
              component = (
                <View
                  style={[
                    GlobalStyles.tabStyle,
                    {backgroundColor: isFocused ? '#E3A164' : '#fff'},
                  ]}>
                  <Text style={{color: isFocused ? '#fff' : '#E3A164'}}>
                    Catalogue
                  </Text>
                </View>
              );
              break;
            case 'customCombo':
              component = (
                <View
                  style={[
                    GlobalStyles.tabStyle,
                    {backgroundColor: isFocused ? '#E3A164' : '#fff'},
                  ]}>
                  <Text style={{color: isFocused ? '#fff' : '#E3A164'}}>
                    Custom Combo
                  </Text>
                </View>
              );
              break;
            case 'profile':
              component = (
                <View
                  style={[
                    GlobalStyles.tabStyle,
                    {backgroundColor: isFocused ? '#E3A164' : '#fff'},
                  ]}>
                  <Text style={{color: isFocused ? '#fff' : '#E3A164'}}>
                    Profile
                  </Text>
                </View>
              );
              break;
            default:
              break;
          }

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              key={index}
              onPress={onPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {component}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};
