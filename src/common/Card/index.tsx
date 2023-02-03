import { memo } from "react";
import cn from "classnames"
import "./Card.css"

export const Card = memo(function Card(props: {
  className?: string;
  key?: number;
  userName: string;
  userSurname: string;
}) {
  return (
    <div className={cn('card', props.className)} key={props.key}>
      <span>Name: {props.userName}</span>
      <span>Surname: {props.userSurname}</span>
    </div>
  );
});