import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation } from "react-query";
import { updateAdmin } from "@/api/api";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "sonner";
import { Pencil } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Must be a valid email",
  }),
  email: z.string().email({
    message: "Must be a valid email",
  }),
  password: z.string().optional(),
});

const AdminFormEdit = ({
  adminData,
  refetch,
}: {
  adminData: any;
  refetch: any;
}) => {
  const { mutate, isLoading, error } = useMutation(
    async (data: {
      adminId: string | undefined;
      name: string | undefined;
      email: string | undefined;
      password?: string | undefined;
    }) => {
      updateAdmin(data);
    },

    {
      onSuccess: () => {
        toast.info("Admin has been Edited");
        refetch();
      },
    }
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: adminData?.user?.name,
      email: adminData?.user?.email,
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = { ...values, adminId: adminData?.user?.id };
    mutate(data);
    if (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"} className="space-x-2">
          <span>Edit</span> <Pencil size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Admin Edit Form</DialogTitle>
        </DialogHeader>
        <div className="my-6 space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="michael scott"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter admin full name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter admin email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      *If you don't want to update the password leave it blank
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogClose className="w-full">
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <BeatLoader color="#36d7b7" size={10} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </DialogClose>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminFormEdit;
