import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, image: "https://centropet.com/wp-content/uploads/2022/08/967983-MLA51275182833_082022.jpg", category: 'cats', title:"Raton"},
    { id: 2, image: "https://centropet.com/wp-content/uploads/2022/09/980526-MLA31351450179_072019.jpg", category: 'cats', title:"Circuito"},
    { id: 3, image: "https://centropet.com/wp-content/uploads/2022/10/665722-MLA51865396558_102022.jpg", category: 'dogs', title:"Pelota"},
    { id: 4, image: "https://centropet.com/wp-content/uploads/2020/06/hueso-2.jpg", category: 'dogs', title:"Hueso"},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });

        getData.then(res => setData(res.find(product => product.id === parseInt(detailId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;