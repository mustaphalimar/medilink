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
import { PencilIcon } from "lucide-react";

const ConsultationForm = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"} className="space-x-2 bg-blue-500 hover:bg-blue-700">
          <span>Create Consultation</span> <PencilIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Consultation For Patient {"{Azirgui}"}</DialogTitle>
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
          <Button className="w-full">Add Consultation</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
