import React, { useState } from "react";
import { Resource } from "./resource";

const fetchLatestMessage = (): Promise<string> => Promise.resolve('testMessage');

const SomeComponent: React.FC = () => {
  const [resource, setResource] = useState<Resource<string>>({ kind: 'undefined' });

  const loadLatestMessage = () => {
    setResource({ kind: 'loading' });
    fetchLatestMessage()
      .then(message => {
        setResource({
          kind: 'defined',
          value: message
        });
      })
      .catch(error => setResource({
        kind: 'error',
        error,
      }))
  }

  const renderLastMessage = () => {
    switch (resource.kind) {
      case 'undefined': return null;
      case 'loading': return "Loading...";
      case 'error': return `Ooops, error: ${resource.error.message}`;
      case 'defined': return `Last message is "${resource.value}"`;
    }
  }

  return (
    <>
      {renderLastMessage()}
      <button onClick={loadLatestMessage}>Fetch latest message</button>
    </>
  )
};
