
/*
  do not change this file, it is auto generated by storybook.
*/
import { configure, addDecorator, addParameters, addArgsEnhancer } from '@storybook/react-native';
import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';
argsEnhancers.forEach(enhancer => addArgsEnhancer(enhancer))


import { decorators, parameters } from './preview';
if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}
if (parameters) {
  addParameters(parameters);
}

const getStories=() => {
  return [
		require("../../app/src/components/composite/app-bar/AppBar.stories.js"), 
		require("../../app/src/components/composite/date-select/DateSelect.stories.js"), 
		require("../../app/src/components/composite/gradient-button/GradientButton.stories.js"), 
		require("../../app/src/components/composite/header-bar/HeaderBar.stories.js"), 
		require("../../app/src/components/composite/toggle-group/ToggleGroup.stories.js"), 
		require("../../app/src/components/core/avatar/Avatar.stories.js"), 
		require("../../app/src/components/core/box/Box.stories.js"), 
		require("../../app/src/components/core/card/Card.stories.js"), 
		require("../../app/src/components/core/icon-button/IconButton.stories.js"), 
		require("../../app/src/components/core/loader/PageLoader.stories.js"), 
		require("../../app/src/components/core/text/Text.stories.tsx"), 
		require("../../app/src/components/core/title/Title.stories.js"), 
		require("../../app/src/pages/login/Login.stories.js"), 
		require("../../app/src/pages/splash/Splash.stories.js")
	];
}
configure(getStories, module, false)

  