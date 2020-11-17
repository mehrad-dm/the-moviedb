import { BrowserRouter } from 'react-router-dom';
import CssReset from 'components/assets/cssReset';
import Router from './router/router';
import MainLayout from 'components/Layouts/Main';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <CssReset />
          <Router />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
