import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch } from "lucide-react";
import { AreaVariant } from "@/components/area-variant";
import { BarVariant } from "@/components/bar-variant";

type Props = {
  data?: {
    date: string;
    income: number;
    expense: number;
  }[];
};

export function Chart({ data = [] }: Props) {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row">
        <CardTitle className="text-xl line-clamp-1">Transactions</CardTitle>
        {/*TODO: add select*/}
      </CardHeader>
      <CardContent>
        {data?.length === 0 ? (
          <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-fill">
            <FileSearch className="size-6 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">
              No data for this period
            </p>
          </div>
        ) : (
          // <AreaVariant data={data} />
          <BarVariant data={data} />
        )}
      </CardContent>
    </Card>
  );
}
