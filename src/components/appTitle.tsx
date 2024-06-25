const AppTitle = (args: { marketId: string }) => {
  const { marketId } = args;
  return (
    <h1>
      <code>{marketId}</code> Orderbook
    </h1>
  );
};

export default AppTitle;
