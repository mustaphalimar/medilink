import { FileClock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Consultation } from "@/types/types";
import { createMarkup } from "@/utils/CreateMarkup";
import { formatDate } from "@/utils/FormatDate";

function ConsultationDisplay({
  consultations,
}: {
  consultations: Consultation[];
}) {
  return (
    <div className="col-start-1 row-span-7 col-span-8 space-y-4 border shadow-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold  flex items-center space-x-2 pb-4">
        <span>
          <FileClock size={20} />
        </span>
        <span>Medical History</span>
      </h3>

      <Accordion type="single" collapsible className="w-full">
        {consultations?.map((cons, index) => (
          <AccordionItem value={`item-${cons.id}`} key={index}>
            <AccordionTrigger className="capitalize">
              <div>
                Doctor {cons.doctor.user.name}{" "}
                <span className="italic text-neutral-500 font-normal">
                  on {formatDate(cons.createdAt)}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div
                dangerouslySetInnerHTML={createMarkup(cons.instructions)}
                className="space-y-4 p-6 co_ren"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ConsultationDisplay;
