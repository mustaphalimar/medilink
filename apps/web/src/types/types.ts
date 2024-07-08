export type Consultation = {
  id: string;
  patientId: string;
  doctorId: string;
  medicalFileId: string;
  instructions: string;
  createdAt: string;
  appointmentId: string;
  doctor: {
    name: string;
    speciality: string;
  };
};

export type Appointment = {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  status: string;
  doctor: {
    name: string;
    speciality: string;
  };
};
