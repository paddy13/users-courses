//Imports arranged alphabetically
import '../App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalPopUp from './modalPopUp';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import { ArrowDown } from 'react-bootstrap-icons';
import { ArrowUp } from 'react-bootstrap-icons';
import { fetchUsers, sortUsers } from '../Redux/Slice/userSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

function UsersListing() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState([])

  // Fetching users data from Store
  const isLoading = useSelector(({usersData}) => usersData.isLoading)
  const users = useSelector(({usersData}) => usersData.users, shallowEqual)

  // Dispatching FetchUser action after the component is rendered
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // Showing Spinner while the used data is being fetched
  if(isLoading) {
    return <div className='spinner'><Spinner animation="border" /></div>;
  }

  // This function get trigger when user click view course button
  // It navigates to new url with user ID (which is used to fetch users courses)
  const handleViewCourses = (id) => {
    navigate(`/view-courses/${id}`)
  }

  // This function gets trigger when user click edit user button
  // It basically toggels Modal and send user data to it to display
  const handleEditUser = (user) => {
    setSelectedUser(user)
    setShow(true)
  }

  const handleModalClose = () => {
    setShow(false)
  }

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <ArrowDown onClick={() => dispatch(sortUsers('descending'))}/>
              Name
              <ArrowUp onClick={() => dispatch(sortUsers('ascending'))}/>
            </th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>City</th>            
            <th>Role</th>
            <th>Username</th>
            <th>Edit Users</th>
            <th>View Courses</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, key) => {
            return (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.role}</td>
                <td>{user.username}</td>
                <td>
                  <Button onClick={() => handleEditUser(user)} variant="primary">
                    Edit User
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handleViewCourses(user.id)} variant="secondary">
                    View Courses
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleModalClose}>
        <ModalPopUp user={selectedUser} onCloseBtn={handleModalClose}/>
      </Modal>
    </div>
  );
}

export default UsersListing;
