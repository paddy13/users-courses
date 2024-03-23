import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateUser } from '../Redux/Slice/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ModalPopUp({user, onCloseBtn}) {
  const [role, setRole] = useState(user.role)
  const [city, setCity] = useState(user.city)
  const [address, setAddress] = useState(user.address)
  const [phone, setPhone] = useState(user.phone)
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [username, setUserName] = useState(user.username)

  const dispatch = useDispatch();

  const handleModalSubmit = () => {
    const payload = {
      id: user.id,
      role,
      city,
      address,
      phone,
      email,
      name,
      username
    }
    dispatch(updateUser(payload))
    onCloseBtn()
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='edit-container'>
          <div className='input-fields'>
            <label htmlFor='role'> Role </label>
            <input id="role" type='text' value={role} onChange={(e) => setRole(e.target.value)}/>
          </div>
          <div className='input-fields'>
            <label htmlFor='city'> City </label>
            <input id="city" type='text' value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className='input-fields'>
            <label htmlFor='address'> Address </label>
            <input id="address" type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='input-fields'>
            <label htmlFor='phone'> Phone </label>
            <input id="phone" type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='input-fields'>
            <label htmlFor='email'> Email </label>
            <input id="email" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input-fields'>
            <label htmlFor='name'> Name </label>
            <input id="name" type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='input-fields'>
            <label htmlFor='username'> Username </label>
            <input id="username" type='text' value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseBtn}>
          Close
        </Button>
        <Button variant="primary" onClick={handleModalSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
}

export default ModalPopUp;
