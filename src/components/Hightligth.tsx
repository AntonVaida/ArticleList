import React from 'react';

type Props = {
  str: string,
  query: string,
}

const Hightligth:React.FC<Props> = ({str, query}) => {
  const selected = str.toLowerCase().indexOf(query.toLowerCase());
  if (!query.length || selected == -1) {
    return (<>{str}</>);
  }
  const words = str.split('');
  console.log([selected, selected + query.length]);
  const result = words.map((word, index) => {
    if (index >= selected && index < selected + query.length) {
      return (
        <span
          key={index}
          style={{
            background: 'yellow'
          }}
        >
          {word}
        </span>
      );
    }
    
    return word;
  });

  console.log(result);
  return (
    <>
      {result}
    </>
  );
};

export default Hightligth;