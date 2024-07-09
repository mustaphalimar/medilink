import axios from "axios";
const url = "http://localhost:4000";

export const getSignleUser = async (userId: string | undefined) => {
  try {
    return await axios(`${url}/users/${userId}`);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPatientById = async (patientId: string | undefined) => {
  try {
    return await axios(`${url}/patient/${patientId}`);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const postConsultation = async (data: {
  patientId: string | undefined;
  doctorId: string | undefined;
  appointmentId: string | undefined;
  medicalFileId: string | undefined;
  instructions: string | undefined;
}) => {
  try {
    return await axios(`${url}/doctor/create-consultation`, {
      method: "POST",
      data: data,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const appointementDone = async (id: string | undefined) => {
  try {
    return await axios(`${url}/appointments/done/${id}`, {
      method: "PATCH",
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

//Admin
export const getAdmins = async (id: string | undefined) => {
  try {
    return await axios(`${url}/admin/${id}`);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createAdmin = async (data: {
  doctorId: string | undefined;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}) => {
  try {
    const dataToSend = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "ADMIN",
    };
    const newAdmin = await axios(`${url}/admin/${data.doctorId}`, {
      method: "POST",
      data: dataToSend,
    });
    console.log(newAdmin);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateAdmin = async (data: {
  adminId: string | undefined;
  name: string | undefined;
  email: string | undefined;
  password?: string | undefined;
}) => {
  try {
    let dataToSend = {};
    if (data.password?.length && data.password?.length > 0) {
      dataToSend = {
        name: data.name,
        email: data.email,
        password: data?.password,
      };
    } else {
      dataToSend = {
        name: data.name,
        email: data.email,
      };
    }

    return await axios(`${url}/admin/${data.adminId}`, {
      method: "PATCH",
      data: dataToSend,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteAdmin = async (id: string | undefined) => {
  try {
    return await axios(`${url}/admin/${id}`, {
      method: "DELETE",
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

//doctor profile update
export const updateDoctorProfile = async (data: {
  doctorId: string | undefined;
  name: string | undefined;
  speciality: string | undefined;
  address: string | undefined;
  phoneNumber: string | undefined;
  cred: {
    userId: string;
    email: string | undefined;
    password?: string | undefined;
  };
}) => {
  try {
    let dataToSend = {};
    if (data.cred.password?.length && data.cred.password?.length > 0) {
      dataToSend = {
        name: data.name,
        speciality: data.speciality,
        address: data.address,
        phoneNumber: data.phoneNumber,
        cred: {
          userId: data.cred.userId,
          email: data.cred.email,
          password: data?.cred.password,
        },
      };
    } else {
      dataToSend = {
        name: data.name,
        speciality: data.speciality,
        address: data.address,
        phoneNumber: data.phoneNumber,
        cred: {
          userId: data.cred.userId,
          email: data.cred.email,
        },
      };
    }
    return await axios(`${url}/doctor/${data.doctorId}`, {
      method: "PATCH",
      data: dataToSend,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getStats = async (doctorId: string | undefined) => {
  try {
    return await axios(`${url}/stats/${doctorId}`);
  } catch (error: any) {
    throw new Error(error);
  }
};
