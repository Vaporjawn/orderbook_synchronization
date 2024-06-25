const TableData = (args: { data: any }) => {
  const { data } = args;
  return <td className='table-cells'>{data}</td>;
};

export default TableData;
