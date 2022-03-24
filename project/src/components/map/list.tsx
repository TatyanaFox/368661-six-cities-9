import React from 'react';
import { Points } from '../../types/points';

type ListProps = {
  points: Points[],
  onListItemHover: any,
}

function List({points, onListItemHover}: ListProps): JSX.Element {
  const listItemHoverHandler = (e: (any)) => {
    onListItemHover(e.target.innerText);
  };

  return (
    <ul className="list">
      {
        points.map((point, index) => {
          const keyValue = `${index}-${point.title}`;

          return (
            <li
              className="list__item"
              key={keyValue}
              onMouseEnter={listItemHoverHandler}
            >
              {point.title}
            </li>
          );
        })
      }
    </ul>
  );
}

export default List;
