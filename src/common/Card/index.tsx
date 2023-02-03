import { memo } from "react";
import { useInView } from 'react-intersection-observer'
import cn from "classnames"
import "./Card.css"

export const Card = memo(function Card(props: {
  className?: string;
  cardKey: number;
  userName: string;
  userSurname: string;
}) {
  const {ref, inView} = useInView({
    threshold: 1,
    triggerOnce: true
  })

  return (
    <li className={cn('card',
      {
        'card_inactive': !inView && props.cardKey > 20,
        'card_active': inView && props.cardKey > 20
      })}

      key={props.cardKey}
      ref={ref}
      >
        <span>Name: {props.userName}</span>
        <span>Surname: {props.userSurname}</span>
    </li>
  );
});
