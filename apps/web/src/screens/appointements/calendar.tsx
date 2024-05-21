import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  return (
    <FullCalendar
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      // initialView="dayGridMonth"
      initialView="timeGridDay"
      selectable={true}
      selectMirror={true}
      editable={true}
      events={[
        {
          title: "John Doe",
          start: "2024-04-28 09:00",
          end: "2024-04-28 09:15",
        },
        {
          title: "John Doe",
          start: "2024-04-28 09:30",
          end: "2024-04-28 09:40",
        },
        {
          title: "John Doe",
          start: "2024-04-28 09:40",
          end: "2024-04-28 10:00",
        },
        { title: "Jane Doe", date: "2024-04-28" },
      ]}
    />
  );
}
