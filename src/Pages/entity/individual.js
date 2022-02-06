import React, {useState, useEffect, useCallback} from 'react';

// components
import EnhancedTable from '../../components/entity/table'

// api
import ProductApi from '../../library/api/products-api';

const IndividualPage = () => {

    const [products, setProducts] = useState();

    const getData = useCallback(async() => {
      try {
          const _products = await ProductApi.getProduct();
          setProducts(_products)
      
      } catch (error) {
          console.log(error.message);
      }
  }, [setProducts]);
  
  useEffect(() => {
      getData();
  }, [getData])


    return (
        <div>
            <h1>Individual Page</h1>
            <EnhancedTable products={products}/>
        </div>
    );  
};

export default IndividualPage;