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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Editor from "@/components/Editor";

const ConsultationForm = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"} className="space-x-2 bg-blue-500 hover:bg-blue-700">
          <span>Create Consultation</span> <PencilIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-max">
        <DialogHeader>
          <DialogTitle className="text-2xl pb-6">
            Consultation For Patient {"{Azirgui}"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 grid-rows-5 gap-10">
          <div className="row-span-full">
            <Avatar className="w-60 h-60">
              <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQH18wOjTHgOww/profile-displayphoto-shrink_800_800/0/1677798557815?e=1722470400&v=beta&t=XvuEKjaswz_Rcl5iWqWnKjmU4tJu1XzegMM2VCFIbOs" />
              <AvatarFallback>Admin</AvatarFallback>
            </Avatar>
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
