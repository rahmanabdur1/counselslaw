

import React, { useState } from 'react';

function AskQsection({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion-container">
      <div
        className={`accordion-title ${expanded ? 'expanded' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      {expanded && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default AskQsection;
