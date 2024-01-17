//example of pipes
type StatusProps = {
  status: 'Loading' | 'Data fetched Success fully' | 'Error on fetching Data';
};

export const Status = (propes: StatusProps) => {
  return (
    <>
      <p>status - {propes.status}</p>
    </>
  );
};
