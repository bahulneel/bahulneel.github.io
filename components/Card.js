import React from 'react';

const Card = ({ title, subtitle, content, itemScope, itemType, itemProp }) => {
  return (
    <div className="bg-primary-darkBlue px-8 py-2 rounded-lg shadow-lg mb-4 text-accent-white flex flex-col" itemScope={itemScope} itemType={itemType}>
      <h2 className="text-accent-lightBlue !mt-6 !mb-1" itemProp={itemProp?.title}>{title}</h2>
      {subtitle && <h3 className="text-secondary-lightGray !my-1" itemProp={itemProp?.subtitle}>{subtitle}</h3>}
      <div itemProp={itemProp?.content}>{content}</div>
    </div>
  );
};

export default Card;
