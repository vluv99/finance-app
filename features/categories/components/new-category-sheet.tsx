import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useCreateCategory } from "@/features/categories/api/use-create-category";
import { CategoryForm } from "@/features/categories/components/category-form";

// eslint-disable-next-line
const formSchema = insertCategorySchema.pick({
  name: true,
});
type FormsValues = z.input<typeof formSchema>;

export function NewCategorySheet() {
  const { isOpen, onClose } = useNewCategory();

  const mutation = useCreateCategory();

  const onSubmit = (values: FormsValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to organize your transactions.
          </SheetDescription>
        </SheetHeader>
        <CategoryForm
          onSubmit={onSubmit}
          disabled={mutation.isPending}
          defaultValues={{ name: "" }}
        />
      </SheetContent>
    </Sheet>
  );
}
