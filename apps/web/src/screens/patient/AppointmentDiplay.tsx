import { Appointment } from "@/types/types";
import { formatDate } from "@/utils/FormatDate";
import { CalendarClock } from "lucide-react";

function AppointmentDisplay({ appointments }: { appointments: Appointment[] }) {
  return (
    <div className="space-y-2 border shadow-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold  flex items-center space-x-2 pb-4">
        <span>
          <CalendarClock size={20} />
        </span>
        <span>Appointments History</span>
      </h3>

      <div className="space-y-4">
        {appointments?.map((app) => {
          return (
            <div className="grid grid-cols-4 gap-4 py-2 border-b">
              <div className="text-lg  capitalize">
                <span className="font-medium">Doctor:</span>{" "}
                <span>{app.doctor?.name}</span>
              </div>
              <div className="text-lg  capitalize">
                <span className="font-medium">Speciality:</span>{" "}
                <span>{app.doctor?.speciality}</span>
              </div>
              <div className="text-lg  capitalize">
                <span className="font-medium">Date:</span>{" "}
                <span>{formatDate(app.date)}</span>
              </div>
              <div className="text-lg  capitalize">
                <span className="font-medium">Status:</span>{" "}
                <span>{app.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppointmentDisplay;
