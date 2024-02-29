import merge from 'deepmerge';
import {THEMES} from '../utils/constant/themeConstant';

const defaultVariant = {
  name: THEMES.DEFAULT.key,
  palette: {
    default: {
      background: '',
      color: '#6E7F98', // rgba(110, 127, 152, 1)
      borderColor: '#6E7F98', // rgba(110, 127, 152, 1)
    },
    success: {
      background: '',
      color: '',
    },
    primary: {
      background: '',
      color: '#2859E9', // rgba(40, 89, 233, 1)
    },
    secondary: {
      background: '',
      color: '#051028', // rgba(5, 16, 40, 1)
    },
    warning: {
      background: '',
      color: '',
    },
    danger: {
      background: '',
      color: '',
    },
    info: {
      background: '',
      color: '',
    },
    defaultLightButton: {
      background: '#FFFFFF', // rgba(255, 255, 255, 1)
      color: '#6E7F98', // rgba(110, 127, 152, 1)
    },
    defaultButton: {
      background: '#FFFFFF', // rgba(255, 255, 255, 1)
      color: '#051028', // rgba(5, 16, 40, 1)
    },
    primaryButton: {
      background: '#2859E9', // rgba(40, 89, 233, 1)
      color: '#FFFFFF', // rgba(255, 255, 255, 1)
    },
  },
  header: {
    background: '#FFFFFF',
    color: '',
  },
  body: {
    background: '#FFFFFF',
    color: '',
  },
  footer: {
    background: '',
    color: '',
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK.key,
  palette: {
    default: {
      background: '',
      color: '#6E7F98', // rgba(110, 127, 152, 1)
    },
    success: {
      background: '',
      color: '',
    },
    primary: {
      background: '',
      color: '#2859E9', // rgba(40, 89, 233, 1)
    },
    secondary: {
      background: '',
      color: '#051028', // rgba(5, 16, 40, 1)
    },
    warning: {
      background: '',
      color: '',
    },
    danger: {
      background: '',
      color: '',
    },
    info: {
      background: '',
      color: '',
    },
    defaultLightButton: {
      background: '#FFFFFF', // rgba(255, 255, 255, 1)
      color: '#6E7F98', // rgba(110, 127, 152, 1)
    },
    defaultbButton: {
      background: '#FFFFFF', // rgba(255, 255, 255, 1)
      color: '#051028', // rgba(5, 16, 40, 1)
    },
    primaryButton: {
      background: '#2859E9', // rgba(40, 89, 233, 1)
      color: '#FFFFFF', // rgba(255, 255, 255, 1)
    },
  },
  header: {
    background: '#FFFFFF',
    color: '',
  },
  body: {
    background: '#FFFFFF',
    color: '',
  },
  footer: {
    background: '',
    color: '',
  },
});

const variants = [defaultVariant, darkVariant];

export default variants;
