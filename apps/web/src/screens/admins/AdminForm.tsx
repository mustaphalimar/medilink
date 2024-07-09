import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation } from "react-query";
import { createAdmin } from "@/api/api";
import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
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

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Must be a valid email",
  }),
  email: z.string().email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must contain at least 6 characters",
  }),
});

const AdminForm = ({ refetch }: { refetch: any }) => {
  const user = useSelector(getUser);

  const { mutate, isLoading, error } = useMutation(
    async (data: {
      doctorId: string | undefined;
      name: string | undefined;
      email: string | undefined;
      password: string | undefined;
    }) => {
      createAdmin(data);
    },
    {
      onSuccess: () => {
        toast.info("Admin has been added");
        refetch();
      },
    }
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = { ...values, doctorId: user?.user?.doctor?.id as string };
    mutate(data);
    if (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Admin</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Admin Form</DialogTitle>
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
                      Enter admin account password
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

export default AdminForm;
