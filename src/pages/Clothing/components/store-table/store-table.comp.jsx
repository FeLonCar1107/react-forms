import React, { useState } from 'react';
import ClothingTable from '../clothing-table/clothing-table.comp';
import SearchBar from '../search-bar/search-bar.comp';

import './store-table.style.css';

const StoreTable = (props) => {

    const [category, setCategory] = useState('c1');
    const [garment, setGarment] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [mark, setMark] = useState('');
    const [price, setPrice] = useState(0);

    const addGarment = (event)=>{
        event.preventDefault();
        console.log('category ' + category)
        console.log('garment ' + garment)
        console.log('size ' + size)
        console.log('gender ' + gender)
        console.log('mark ' + mark)
        console.log('price ' + price)
    }

    return(
        <div className="store-table-container">
            <div>
                <SearchBar/>
                <ClothingTable garmentsList={props.garmentsList}/>
            </div>
            <div className="forms">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Type of shoes
                                </td>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        <option value="c1">Botas</option>
                                        <option value="c2">Tennis</option>
                                    </select> 
                                </td>
                            </tr>
                            <tr>
                                <td>Subcategory</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={garment}
                                        onChange={(event)=>{
                                            setGarment(event.target.value);
                                        }}
                                    />       
                                </td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={size}
                                        onChange={(event)=>{
                                            setSize(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={gender}
                                        onChange={(event)=>{
                                            setGender(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={mark}
                                        onChange={(event)=>{
                                            setMark(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input 
                                        type="number"
                                        value={price}
                                        onChange={(event)=>{
                                            setPrice(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={addGarment}
                                    >                                        
                                        Add Shoes
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default StoreTable;