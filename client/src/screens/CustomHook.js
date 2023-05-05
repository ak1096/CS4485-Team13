import { useState } from 'react';

const useForm = () => {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (e) => {
    const temp = e.target.value;
    setEmail(temp);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(temp) && temp.endsWith('@utdallas.edu'));
  }

  return {
    password,
    firstName,
    lastName,
    email,
    isValid,
    handlePasswordChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
  };
};

export default useForm;
