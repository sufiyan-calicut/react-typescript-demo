type PersonProps = {name: {first: string; last: string}};

// example of object type;
export const Person = (props: PersonProps) => {
  return (
    <div>
      <div className="fullName">
        {' '}
        {props.name.first} {props.name.last}{' '}
      </div>
    </div>
  );
};
