export type Consultation = {
  id: string;
  patientId: string;
  doctorId: string;
  medicalFileId: string;
  instructions: string;
  createdAt: string;
  doctor: {
    user: {
      name: string;
    };
  };
};

export type Appointment = {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  status: string;
  doctor: {
    user: {
      name: string;
    };
  };
};
