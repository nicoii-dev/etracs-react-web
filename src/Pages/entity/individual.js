import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';

// components
import EnhancedTable from '../../components/table/entity';
import AddIndividual from '../../components/entity/individual/add-individual';
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

  const addIndividual = () => {
    console.log(1)
  }


    return (
        <div>
            <h1>Individual Page</h1>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                <Button href="#add" variant="contained" style={{color:'white'}}>
                    Add Individual
                </Button>
            </div>

            <div>
                <EnhancedTable products={products}/>
            </div>
            <div id="add" style={{height:30}}></div>
            <div id="s" style={{marginTop:30}}>
                <AddIndividual />
            </div>
        </div>
    );  
};

export default IndividualPage;