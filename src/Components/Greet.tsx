
// use type when building applications, use interfaces when building libraries
type GreetTypes = {
  name: string;
  age:number;
  eligible:boolean;

};

export const Greet = (props: GreetTypes) => {
  return (
    <div>
      <h4>Hello {props.name} your age is {props.age} and you are {props.eligible ? 'eligible' : 'not eligible'} to join</h4>
    </div>
  );
};
