//import React, { useState } from 'react';
import React from 'react';
function sectionHeader(props) {
  // Declare a new state variable, which we'll call "count"
 // const [count, setCount] = useState(0);

  return (
    <><article className="markdown">
      <div className="title-region">
        <h1>{props.name}
        </h1>
      </div>
    </article>
    <section className="markdown"><p>Here list all the resources that related with Ant Design.</p></section></>
  );
};
export default sectionHeader;