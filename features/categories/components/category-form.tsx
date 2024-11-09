import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormsValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormsValues;
  onSubmit: (values: FormsValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

export function CategoryForm({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
}: Props) {
  const form = useForm<FormsValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormsValues) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="e.g. Food, Travel, etc."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full">
          {id ? "Save changes" : "Create category"}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full"
            variant="outline"
          >
            <Trash className="size-4 mr-2" />
            Delete category
          </Button>
        )}
      </form>
    </Form>
  );
}
