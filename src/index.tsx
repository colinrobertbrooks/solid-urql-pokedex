/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, useRoutes } from 'solid-app-router';
import {
  createClient as createUrqlClient,
  Provider as UrqlProvider,
} from './utils/solid-urql';

import pages from './utils/pages.js';

import { setup } from 'twind/shim';
import { config } from '../twind.config.js';

setup(config);

const urqlClient = createUrqlClient({
  url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
});

function App() {
  const Routes = useRoutes(pages);
  return (
    <UrqlProvider value={urqlClient}>
      <Routes />
    </UrqlProvider>
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')!
);
