import Alert from 'react-bootstrap/Alert';

const Courses = () => {
  return (
    <Alert className="invalid-user" variant={"danger"}>
      Page not found <Alert.Link href="/">Got to Home</Alert.Link>
    </Alert>
  )
}

export default Courses;
