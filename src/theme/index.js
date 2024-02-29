import {Dimensions} from 'react-native';
import variants from './variants';

const {height, width} = Dimensions.get('window');

const createThemePrepare = (themeProps, customThemeProps) => {
  return {
    ...themeProps,
    ...customThemeProps,
  };
};

const createTheme = name => {
  let themeConfig = variants.find(variant => variant.name === name);

  if (!themeConfig) {
    console.log(new Error(`The theme ${name} is not valid`));
    themeConfig = variants[0];
  }

  let _createThemePrepare = createThemePrepare(
    {
      spacing: {
        byHeight: px => `${height * (px / height)}px`,

        byWidth: px => `${width * (px / width)}px`,
      },

      //* breakpoints: Gerekli ise kesme nokta değerleri,
      //* components: Gerekli ise components için tema sıfırlama vs..,
      //* typography: Gerekli ise değerleri önceden belirlenmiş text ayarları,
      //* shadows: Gerekli ise gölgelendirmeler,

      palette: themeConfig.palette,
    },
    {
      name: themeConfig.name,
      header: themeConfig.header,
      body: themeConfig.body,
      footer: themeConfig.footer,
    },
  );

  return _createThemePrepare;
};

export default createTheme;
