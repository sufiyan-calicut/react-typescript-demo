// Example of array type
type PersonListProps = {
  data: {
    id: number;
    name: string;
    place: string;
  }[];
};

export const PersonsList = (props: PersonListProps) => {
  return (
    <>
      {props.data.map(person => (
        <p key={person.id}>
          {' '}
          {person.name} {person.place}{' '}
        </p>
      ))}
    </>
  );
};
