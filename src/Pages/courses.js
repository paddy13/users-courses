import { useParams } from 'react-router-dom';
import { fetchUsersCourses } from '../Redux/Slice/userSlice';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import Spinner from 'react-bootstrap/esm/Spinner';
import Alert from 'react-bootstrap/Alert';

const Courses = () => {
  const { id } = useParams();
  const selectedUser = useSelector(({usersData}) => usersData.selectedUser, shallowEqual)
  const isLoading = useSelector(({usersData}) => usersData.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersCourses(id))
  }, [dispatch, id]);

  if(isLoading) {
    return <div className='spinner'><Spinner animation="border" /></div>;
  }

  if(selectedUser.length === 0) {
    return (
      <Alert className="invalid-user" variant={"warning"}>
        Oopss!! I think you have selected a wrong user!! <Alert.Link href="/">Got to Home</Alert.Link>
      </Alert>
    )
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Certification</th>
          <th>Passmarks</th>
          <th>Classname</th>
          <th>Marks</th>
          <th>Class ID</th>
        </tr>
        </thead>
        <tbody>
          {selectedUser && selectedUser.map((user, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{user.certificate}</td>
                <td>{user.passmarks}</td>
                <td>{user.classname}</td>
                <td>{user.marks}</td>
                <td>{user.classid}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Courses;
