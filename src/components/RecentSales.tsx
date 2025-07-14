// components/recent-sales.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "https://avatars.githubusercontent.com/u/1?v=4",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "https://avatars.githubusercontent.com/u/2?v=4",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "https://avatars.githubusercontent.com/u/3?v=4",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "https://avatars.githubusercontent.com/u/4?v=4",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "https://avatars.githubusercontent.com/u/5?v=4",
  },
]

export function RecentSales() {
  return (
    <Card className="bg-white dark:bg-[#0d0d0d] text-black dark:text-white">
      <CardHeader>
        <CardTitle className="text-lg">Recent Sales</CardTitle>
        <p className="text-sm text-muted-foreground">
          You made 265 sales this month.
        </p>
      </CardHeader>
      <CardContent className="grid gap-6">
        {sales.map((sale, index) => (
          <div key={index} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={sale.avatar} alt={sale.name} />
              <AvatarFallback>{sale.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <div className="ml-auto font-medium">{sale.amount}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
