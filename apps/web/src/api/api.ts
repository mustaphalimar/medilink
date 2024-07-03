import axios from "axios";

export const getPatientById = async (patientId: string | undefined) => {
  try {
    return await axios(`http://localhost:4000/patient/${patientId}`);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const postConsultation = async (data: {
  patientId: string | undefined;
  doctorId: string | undefined;
  medicalFileId: string | undefined;
  instructions: string | undefined;
}) => {
  try {
    return await axios(`http://localhost:4000/doctor/create-consultation`, {
      method: "POST",
      data: data,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
