import React from 'react';

const List = ({personas}) => {
  return (
    <>
      {personas.map((persona) => {
        const {id,nombre,edad,image} = persona;
        return (
            <article key={id} className="persona">
                <img src={image} alt={nombre} />
                <div>
                    <h4>{nombre}</h4>
                    <p>{edad} años</p>
                </div>
            </article>
        )
      })}
    </>
  );
};

export default List;