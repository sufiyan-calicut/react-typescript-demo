/**optional props example , which means if a component recieves multiple props, we should
give each props otherwise it returns error to handle that we can set a property as optional using ? symbol and we can 
give default value while destructuring the props */

type MessageProps = {
  name: string;
  isLoggedIn: boolean;
  messageCount?: number;
};
export const Message = (props: MessageProps) => {
  const {messageCount = 0} = props;
  return (
    <>
      {props.isLoggedIn ? (
        <p>
          hello {props.name} you have {messageCount} unread messages
        </p>
      ) : (
        <p>hello User! Please log in first</p>
      )}
    </>
  );
};
