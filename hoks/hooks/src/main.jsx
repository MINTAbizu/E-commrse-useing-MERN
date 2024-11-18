import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reducer, { initialState } from './Othercompont/Reducer/reducer.jsx';
import { StateProvider } from './Othercompont/StateProvider/StateProvider.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import { Dataprovider } from './compont/dataprovider.jsx copy/dataprovider.jsx';
// import reducer, { initialstate } from './compont/utilitys/reducer.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
    </React.StrictMode>,
);