const Footer = (args: { sequence: number; timestamp: number }) => {
  const { sequence, timestamp } = args;
  return (
    <>
      <p className='footer'>
        <strong>Sequence: </strong>
        <code>{sequence}</code>
      </p>
      <p className='footer'>
        <strong>Timestamp: </strong>
        <code>{timestamp}</code>
      </p>
    </>
  );
};

export default Footer;
