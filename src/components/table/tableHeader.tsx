const TableHeader = (args: { label: string }) => {
  const { label } = args;
  return (
    <>
      <caption
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          outline: '1px solid black',
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid grey',
        }}
      >
        {label}
      </caption>
      <thead>
        <tr style={{ color: 'white' }}>
          {label === 'Bids' ? <th>Price</th> : <th>Size</th>}
          {label === 'Asks' ? <th>Price</th> : <th>Size</th>}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
