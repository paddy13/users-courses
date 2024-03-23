import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNextPageUsers } from '../Redux/Slice/userSlice';

const PaginationPage = () => {
  const usersData = useSelector(({usersData}) => usersData)
  const { users, currentPage, usersPerPage } = usersData

  const dispatch = useDispatch()
  const lastPage = Math.ceil(users.length / usersPerPage)

  const handleNextAndPrev = (payload) => {
    dispatch(fetchNextPageUsers({page: payload, currentPage}))
  }

  return (
    <Pagination size="lg">
      <Pagination.Item disabled={currentPage === 1} onClick={() => handleNextAndPrev('pre')}>
        {'<'}
      </Pagination.Item>
      <Pagination.Item>
        {currentPage}
      </Pagination.Item>
      <Pagination.Item disabled={currentPage === lastPage} onClick={() => handleNextAndPrev('next')} >
        {'>'}
      </Pagination.Item>
    </Pagination>
  )
}

export default PaginationPage;
