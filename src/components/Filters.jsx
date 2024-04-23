import React from 'react'
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { constants } from './constants';

const Filters = ({ setMainData }) => {
    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
    };
   
    const getDataFromDB = async(year) => {
        try{
            const response = await axios.get(constants.URL+`/api/data/year/${year}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
   

    return (
        <div className='tabsClass' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

            <Dropdown onSelect={handleSelect}>

                <Dropdown.Toggle   id="dropdown-basic">
                    Filter By Year
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1" >2014</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >2015</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >2016</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >2017</Dropdown.Item>
                    <Dropdown.Item eventKey="5" >2018</Dropdown.Item>
                    <Dropdown.Item eventKey="6" >2019</Dropdown.Item>
                    <Dropdown.Item eventKey="7" >2020</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

                    </div>
    )
}

export default Filters