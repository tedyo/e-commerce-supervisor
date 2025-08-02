import "./counterCard.scss";

type CounterCardProps = {
  count: string;
  subTitle: string;
};

const CounterCard = ({ count, subTitle }: CounterCardProps) => {
  return (
    <div className="flow-card">
      <div className="counter-circle">{count}</div>
      <span>{subTitle}</span>
    </div>
  );
};

export default CounterCard;
