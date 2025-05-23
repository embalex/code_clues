## Receiving data from server. React way is still unusefull

Case: need to receive data from a server. Seems it's really easy because only 3 states of data are available: loading, received (data) and error. And all of them can be rendered using React (https://react.dev/reference/react/use#streaming-data-from-server-to-client). But what happens when the page is just rendered and receiving of data should be followed by clicking the button? Yep! One more state - no data or anything like that. And how do you show the user that the latest messages are being received from the server? Of course - one more state))). And I know no one way to extend the "react with use" way. This means the approach should be changed. As for me is a good way to use discriminated unions and typescript really helps to implement it. See the delta of the code below.

```
type Undefined = { kind: 'undefined' };
type Defined<T> = { kind: 'defined'; value: T };
type Loading = { kind: 'loading' };
type ErrorResource = { kind: 'error'; error: Error };
type Reloading<T> = { kind: 'reloading'; value: T };

type Resource<T> = Undefined | Defined<T> | Loading | ErrorResource | Reloading<T>;

///////////

const SomeComponent: React.FC = () => {
  const [resource, setResource] = useState<Resource<string>>({ kind: 'undefined' });

  const loadLatestMessage = () => {
    setResource({ kind: 'loading' });
    fetchLatestMessage()
      .then(message => { setResource({ kind: 'defined', value: message }); })
      .catch(error => setResource({ kind: 'error', error }))
  }

  const renderLatestMessage = () => {
    switch (resource.kind) {
      case 'undefined': return null;
      case 'loading': return "Loading...";
      case 'error': return `Ooops, error: ${resource.error.message}`;
      case 'defined': return `Last message is "${resource.value}"`;
      case 'reloading': return `Last message is "${resource.value}". Newest are checking...`;
      return null;
    }
  }

  return (
    <>
      {renderLatestMessage()}
      <button onClick={loadLatestMessage}>Fetch latest message</button>
    </>
  )
};
```


