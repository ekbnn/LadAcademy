const MyButton = () => {
  const handleClick = () => {
    alert('Кнопка нажата');
  };
  return <button onClick={handleClick}>Кнопка</button>;
};

//TODO::Сделать children и type

export default MyButton;
