import './App.css';
import Buscador from './componentes/Buscador';
import Grilla from "./componentes/Grilla";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import store from './redux/store';

function App() {
    const client = new QueryClient();

  return (
      <QueryClientProvider client={client}>
          <Provider store={store}>
                <div className="App">
                  <div className="App-body">
                      <h1>Rick and Morty</h1>
                      <h2>Buscador de Personajes</h2>
                      <Buscador />
                      <Grilla/>
                  </div>
                </div>
          </Provider>
      </QueryClientProvider>
  );
}

export default App;
