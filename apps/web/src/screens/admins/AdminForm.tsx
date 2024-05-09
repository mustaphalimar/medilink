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

const AdminForm = () => {
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
          <div>
            <Label>Full Name</Label>
            <Input placeholder="Full Name" type="text" />
          </div>
          <div>
            <Label>Email</Label>
            <Input placeholder="Email" type="email" />
          </div>
          <div>
            <Label>Password</Label>
            <Input placeholder="password" type="password" />
          </div>
        </div>
        <DialogClose>
          <Button>Submit</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AdminForm;
