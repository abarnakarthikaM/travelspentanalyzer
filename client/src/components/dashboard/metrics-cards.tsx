
import { 
  DollarSign, 
  Send, 
  Home, 
  Car,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricsCardsProps {
  metrics?: {
    totalExpenses: number;
    airTravel: number;
    accommodation: number;
    groundTransport: number;
  };
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
  const cards = [
    {
      title: "Total Expenses",
      value: metrics?.totalExpenses || 1248567,
      prefix: "$",
      icon: <DollarSign className="w-5 h-5 text-gray-600" />,
      change: "+12.5%",
      changeType: "positive" as const,
      borderColor: "border-t-red-400",
      bgColor: "bg-red-50",
    },
    {
      title: "Air Travel",
      value: metrics?.airTravel || 567890,
      prefix: "$",
      icon: <Send className="w-5 h-5 text-gray-600" />,
      change: "+6.2%",
      changeType: "positive" as const,
      borderColor: "border-t-blue-400",
      bgColor: "bg-blue-50",
    },
    {
      title: "Hotel Stays",
      value: metrics?.accommodation || 432156,
      prefix: "$",
      icon: <Home className="w-5 h-5 text-gray-600" />,
      change: "-3.1%",
      changeType: "negative" as const,
      borderColor: "border-t-orange-400",
      bgColor: "bg-orange-50",
    },
    {
      title: "Ground Transport",
      value: metrics?.groundTransport || 248521,
      prefix: "$",
      icon: <Car className="w-5 h-5 text-gray-600" />,
      change: "+18.7%",
      changeType: "positive" as const,
      borderColor: "border-t-teal-400",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <div className="flex gap-6 mb-8 overflow-x-auto min-w-0" style={{ flexWrap: 'nowrap' }}>
      {cards.map((card, index) => (
        <Card key={index} className={`${card.borderColor} border-t-4 ${card.bgColor} flex-shrink-0`} style={{ minWidth: '250px' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {card.title}
            </CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {card.prefix}{card.value.toLocaleString()}
            </div>
            <div className="flex items-center text-xs">
              {card.changeType === "positive" ? (
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
              )}
              <span className={`font-medium ${
                card.changeType === "positive" ? "text-green-500" : "text-red-500"
              }`}>
                {card.change}
              </span>
              <span className="text-gray-500 ml-1">from previous period</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
