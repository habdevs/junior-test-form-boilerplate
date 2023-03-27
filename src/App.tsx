import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppWrapper, ImageList } from './components';
import { Form } from './components/Form';
import { IPhoto } from './services/unsplash.service';

const queryClient = new QueryClient();

function App() {
  const [photos] = useState<IPhoto[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <header>
          <h1>Test Task Form</h1>
        </header>
        <main>
          <section>
            <Form />
            <br />
            <ImageList photos={photos} />
          </section>
        </main>
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
