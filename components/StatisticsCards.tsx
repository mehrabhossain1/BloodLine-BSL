import { Card } from "./ui/card";
import { User, CircleCheckBig, Smile } from "lucide-react";

interface StatisticsCardsProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
}

function SingleStatisticCard({ title, value, icon }: StatisticsCardsProps) {
  return (
    <Card
      className={`flex items-center p-4 shadow-none border-none mt-9 gap-5`}
    >
      <div className="size-12 bg-primary/25 rounded-md flex items-center justify-center">
        <div className="text-primary text-2xl">{icon}</div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">{value}</h3>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </Card>
  );
}

const StatisticsCards = () => {
  const statistics = [
    {
      title: "Total Donors",
      value: 59,
      icon: <User />,
    },
    {
      title: "Last Donor",
      value: "John Doe",
      icon: <Smile />,
    },
    {
      title: "Available Donors",
      value: 30,
      icon: <CircleCheckBig />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 poppins mt-5">
      {statistics.map((stat, index) => (
        <SingleStatisticCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default StatisticsCards;
