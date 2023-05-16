import React, { useEffect, useState } from 'react';

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => setErrorMessage(message), []);

  return errorMessage && errorMessage.length > 0 ? (
    <div>
      <p onClick={() => setErrorMessage('')}>{errorMessage}</p>
    </div>
  ) : null;
};

export default ErrorMessage;
