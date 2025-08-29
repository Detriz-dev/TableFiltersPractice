import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import CheckboxesTags from './Filters'

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <div>
    <div> <CheckboxesTags /> </div>
    <StyledEngineProvider injectFirst>
   
      <Demo />
    </StyledEngineProvider>
    </div>
  </React.StrictMode>


);