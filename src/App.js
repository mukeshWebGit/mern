import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
	  const fetchData = async () => {
		const result = await axios.get('/api/products');
		setProducts(result.data);
	  };
	  fetchData();
}, []);
	 console.log(products);
	return (
		<>
			<h1>This is React WebApp </h1>
			 
		</>
	);
}

export default App;
