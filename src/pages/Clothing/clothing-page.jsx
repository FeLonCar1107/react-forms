import React from 'react';
import StoreTable from './components/store-table/store-table.comp';

const CoursesPage = () => {

    let garmentsList = [
        {
            id:"c1",
            name:'Botas',
            garments:[
                {
                    id:"c1g1",
                    name:"Mexicana",
                    size: 39,
                    gender:"Male",
                },
                {
                    id:"c1g2",
                    name:"Americano",
                    size: 35,
                    gender:"Female",
                },
                {
                    id:"c1g3",
                    name:"Colombiana",
                    size: 38,
                    gender:"Female",
                }
            ],
            tradeMarks:[
                {
                    id:"c1m1",
                    mark:"Andersen",
                    price:'$150',
                },
                {
                    id:"c1m2",
                    mark:"Boston",
                    price:'$175',
                },
                {
                    id:"c1m3",
                    mark:"Bata",
                    price:'$110',
                }
            ]
        },
        {
            id:"c2",
            name:'Tennis',
            garments:[
                {
                    id:"c2g1",
                    name:"Runner",
                    size:40,
                    gender:"Male",
                },
                {
                    id:"c2g2",
                    name:"Swimrun",
                    size:34,
                    gender:"Female",
                },
                {
                    id:"c2g3",
                    name:"Walking",
                    size:37,
                    gender:"Male",
                }
            ],
            tradeMarks:[
                {
                    id:"c2m1",
                    mark:"Adidas",
                    price:'$450',
                },
                {
                    id:"c2m2",
                    mark:"Nike",
                    price:'$399',
                },
                {
                    id:"c2m3",
                    mark:"Reebok",
                    price:'$350',
                }
            ]
        }
    ];
    

    return(
        <>
            <StoreTable 
                garmentsList={garmentsList}
            />
        </> 
    )

}

export default CoursesPage;