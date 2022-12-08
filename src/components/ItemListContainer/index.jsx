import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from 'react-router-dom';


const products = [
    { id: 1, image: "https://centropet.com/wp-content/uploads/2022/08/967983-MLA51275182833_082022.jpg", category: 'cats', title:"Raton"},
    { id: 2, image: "https://centropet.com/wp-content/uploads/2022/09/980526-MLA31351450179_072019.jpg", category: 'cats', title:"Circuito"},
    { id: 3, image: "https://centropet.com/wp-content/uploads/2022/10/665722-MLA51865396558_102022.jpg", category: 'dogs', title:"Pelota"},
    { id: 4, image: "https://centropet.com/wp-content/uploads/2020/06/hueso-2.jpg", category: 'dogs', title:"Hueso"},
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (products);
            }, 1000);
        });
        if (categoryId) {
            getData.then(res => setData(res.filter(product => product.category === categoryId)));
        }else {
            getData.then(res => setData(res));
        }    
    }, [categoryId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <><Title /><ItemCount initial={1} stock={5} onAdd={onAdd} /><ItemList data={data}/></>
    ) ;
}

export default ItemListContainer;