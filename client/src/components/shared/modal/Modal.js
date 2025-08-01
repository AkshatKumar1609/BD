import React, { useState } from 'react'
import InputType from '../Form/InputType';
import {useSelector} from 'react-redux';
import { set } from 'mongoose';
import API from './../../../services/API';



const Modal = () => {
    const [inventoryType, setInventoryType] = useState('in');
    const [bloodGroup, setBloodGroup] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [donarEmail, setDonarEmail] = useState('');
    const {user} = useSelector(state => state.auth);
    const handleModalSubmit= async ()=>{
        try {
            if(!bloodGroup || !quantity){
                alert('Please provide all fields')
            }
            const {data} = await API.post('/inventory/create-inventory',{
                donarEmail,
                email:user?.email,
                organization:user?._id,
                inventoryType,
                bloodGroup,
                quantity
            })
            if(data?.success){
                alert('New record created successfully');
                window.location.reload();
            }
                
        } catch (error) {
            window.location.reload();
            console.log(error)
        }
    }

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Manage Blood Record</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex mb-3'>
                                Blood Type: &nbsp;
                                <div className='form-check ms-3'>
                                    <input type='radio' name='inRadio' id='in' defaultChecked value={'in'} onChange={(e) => {
                                        setInventoryType(e.target.value);
                                    }} className='form-check-control' />
                                    <label htmlFor='in' className='form-check-label'>IN</label>
                                </div>
                                <div className='form-check ms-3'>
                                    <input type='radio' name='inRadio' id='out' value={'out'} onChange={(e) => {
                                        setInventoryType(e.target.value);
                                    }} className='form-check-control' />
                                    <label htmlFor='out' className='form-check-label'>OUT</label>
                                </div>
                            </div>
                            <select className="form-select mb-2" aria-label="Default select example" onChange={(e) => setBloodGroup(e.target.value)}>
                                <option defaultValue>Open this select menu</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                            </select>
                            <InputType labelText={'Donar Email'} labelFor={'donarEmail'} inputType={'email'} value={donarEmail} onChange={(e)=>{
                                setDonarEmail(e.target.value);
                            }}/>
                            <InputType labelText={'Quantity (ml)'} labelFor={'quantity'} inputType={'number'} value={quantity} onChange={(e)=>{
                                setQuantity(e.target.value);
                            }}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
