import React from 'react';
import ReactDOM from 'react-dom/client';

import FetchExample from './components/FetchExample.jsx';
import { Analytics } from '@vercel/analytics/react';



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<FetchExample />
<Analytics />	
</React.StrictMode>
);



