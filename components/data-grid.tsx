"use client";

import { useSearchParams } from "next/navigation";
import { formatDateRange } from "@/lib/utils";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { FaPiggyBank } from "react-icons/fa";
import { DataCard } from "@/components/data-card";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export function DataGrid() {
  const { data } = useGetSummary();

  const params = useSearchParams();
  const from = params.get("from") || undefined;
  const to = params.get("to") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        variant="default"
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        variant="default"
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Expense"
        value={data?.expenseAmount}
        percentageChange={data?.expenseChange}
        icon={FaArrowTrendDown}
        variant="default"
        dateRange={dateRangeLabel}
      />
    </div>
  );
}
