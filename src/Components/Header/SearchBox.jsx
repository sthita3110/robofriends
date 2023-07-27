const SearchBox = ({ searchChange }) => {
  return (
    <>
      <div className="p-2">
        <input
          className="p-2 bg-primary-subtle"
          type="search"
          placeholder="search robots"
          onChange={searchChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
