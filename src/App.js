import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {ThemeProvider} from './contexts/ThemeContext';
import {LanguageProvider} from './contexts/LanguageContext';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <Navigator />
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
