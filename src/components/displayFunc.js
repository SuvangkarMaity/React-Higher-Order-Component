const DataDisplay = ({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
      <div>
        <h2>Data:</h2>
        {/* <h2>{JSON.stringify(data)}</h2> */}
        <h2>{JSON.stringify(data[0].title, null, 2)}</h2>
        {/* <pre>{JSON.stringify(data[-55].id, null, 2)}</pre> */}
        <p>Error: {error}</p>
      </div>
    );
  };
  

  export default DataDisplay;