import { LegacyRef, memo } from 'react'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'
import './Card.css'

export const Card = memo(function Card(props: {
  className?: string;
  cardKey: number;
  cardRef: LegacyRef<HTMLParagraphElement>;
  userName: string;
  userSurname: string;
}) {
  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true,
  })

  return (
    <li
      className="card-wrapper"
      key={props.cardKey}
      ref={ref}
    >
      <p className={cn('card', {'card_inactive': !inView}, props.className)} ref={props.cardRef}>
        <span>Name: {props.userName}</span>
        <span>Surname: {props.userSurname}</span>
      </p>
    </li>
  );
});


