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
import { EyeIcon, FileClock, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "react-query";
import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type patientExaminate = {
  id?: any;
};

const PatientExaminate = ({ id }: patientExaminate) => {
  const { data, isLoading } = useQuery(`getUser${id}`, async () => {
    try {
      return await axios(`http://localhost:4000/patient/${id}`);
    } catch (error: any) {
      throw new Error(error);
    }
  });

  const patient = data?.data;

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} size={"sm"} className="space-x-2">
          <span>Examinate</span> <EyeIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-max ">
        <DialogHeader>
          <DialogTitle className="text-3xl pb-6 flex items-center space-x-2">
            <span>
              <User2 strokeWidth={3} />
            </span>
            <span>Patient {patient?.user?.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 grid-rows-5 gap-10">
          <div className="row-span-3">
            <Avatar className="w-60 h-60">
              <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQH18wOjTHgOww/profile-displayphoto-shrink_800_800/0/1677798557815?e=1722470400&v=beta&t=XvuEKjaswz_Rcl5iWqWnKjmU4tJu1XzegMM2VCFIbOs" />
              <AvatarFallback>Admin</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <Label>Full Name</Label>
            <Input disabled value={patient?.user?.name} type="text" />
          </div>
          <div>
            <Label>Weight</Label>
            <Input disabled value={patient?.weight} type="text" />
          </div>

          <div className="col-start-2">
            <Label>Gendre</Label>
            <Input disabled value={patient?.gendre} type="text" />
          </div>
          <div>
            <Label>Height</Label>
            <Input disabled value={patient?.height} type="text" />
          </div>

          <div className="col-start-1 row-span-7 col-span-8  ">
            <h3 className="text-xl font-medium flex items-center space-x-2">
              <span>
                <FileClock size={20} />
              </span>{" "}
              <span>Medical History</span>
            </h3>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <DialogClose>
          <Button className="w-full">Done</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PatientExaminate;
