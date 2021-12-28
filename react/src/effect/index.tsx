import * as React from 'react';
import { myUseEffect } from './my-effect';

const Effect: React.FC = () => {
  const [value, setValue] = React.useState('');
  myUseEffect(() => {
    document.title = value;
    console.log('[no dep] value is ', value);
  });
  myUseEffect(() => {
    console.log('react');
  }, [])

  myUseEffect(() => {
    console.log('[dep value] value is ', value);
  }, [value]);
  return (
    <div>
      <h2>Effect</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="document.title"
      />
    </div>
  );
};

export default Effect;