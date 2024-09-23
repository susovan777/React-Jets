const Result = ({ movies }) => {
  return (
    <p className="num-result">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default Result;
