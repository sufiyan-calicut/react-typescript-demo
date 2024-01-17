type HeadingProps = {
  children: string;
};
// example of using children
export const Heading = (props: HeadingProps) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};
