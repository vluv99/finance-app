import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { Triangle, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export function CategoryColumn({ id, category, categoryId }: Props) {
  const { onOpen: onOpenCategory } = useOpenCategory();
  const { onOpen: onOpenTransaction } = useOpenTransaction();

  const onClick = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    } else {
      onOpenTransaction(id);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && "text-rose-500",
      )}
    >
      {!category && <TriangleAlert className="size-4 mr-2 shring-0" />}
      {category || "uncategorized"}
    </div>
  );
}
