import React from 'react';
import { useQuery } from '@apollo/client';
import LaunchesList from '../../components/LaunchesList/LaunchesList';
import Preloader from '../../components/Preloader/Preloader';
import { getLaunches } from './Query';
import Pagination from 'react-paginate';
const Launches = () => {
  const [offset, setOffset] = React.useState(
    +sessionStorage.getItem('offset') || 0
  );
  const [total, setTotal] = React.useState(1);
  const { data, loading } = useQuery(getLaunches, {
    variables: {
      offset,
      limit: 10,
    },
  });
  React.useEffect(() => {
    data && setTotal(data.totalCount);
  }, [data]);

  const pageChange = (data) => {
    let selected = data.selected;
    sessionStorage.setItem('page', data.selected);
    setOffset(Math.ceil(selected * 10));
  };

  return (
    <div>
      {loading && !data ? (
        <Preloader />
      ) : (
        <LaunchesList data={data.getAllLaunches} />
      )}

      <Pagination
        pageCount={Math.ceil(total / 10)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        containerClassName={'pagination d-flex justify-content-center pb-3'}
        breakClassName={'page-item disabled'}
        breakLinkClassName={'page-link'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'page-item active'}
        activeLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        onPageChange={pageChange}
        initialPage={+sessionStorage.getItem('page') || 0}
      />
    </div>
  );
};

export default Launches;
