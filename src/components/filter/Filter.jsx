import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filter(e.currentTarget.value));
  };

  return (
    <label>
      <input type="text" onChange={handleFilter} />
    </label>
  );
};

export default Filter;
