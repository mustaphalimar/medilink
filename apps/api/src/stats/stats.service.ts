import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StatsService {
  constructor(private readonly databaseService: DatabaseService) {}

  getMonthName(dateString: any) {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long' });
  }

  async getAppointmentsByMonthLast6Months(id: string) {
    // Get the current date and the date 6 months ago
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);

    // get total appointments
    const totalAppointments = await this.databaseService.appointment.count({
      where: {
        status: {
          not: 'PENDING',
        },
      },
    });

    // Fetch appointments from the last 6 months
    const result: any = await this.databaseService.$queryRaw`
    SELECT 
      DATE_TRUNC('month', "date") AS month,
      COUNT(*) AS total
    FROM "Appointment"
    WHERE "date" >= ${sixMonthsAgo} AND "date" <= ${currentDate} AND "doctorId" = ${id}
    GROUP BY month
    ORDER BY month;
  `;

    // Convert the result to a more usable format and handle BigInt
    const appointments = result.map((row) => ({
      month: row.month.toISOString().slice(0, 7), // YYYY-MM
      total: parseInt(row.total.toString(), 10), // Convert BigInt to Number
    }));

    // Generate all months in the last 6 months within the current year
    const allMonths = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() - i);
      if (date.getFullYear() === currentDate.getFullYear()) {
        allMonths.push(date.toISOString().slice(0, 7)); // YYYY-MM
      }
    }

    // Create a map for easy lookup and to ensure all months are covered
    const appointmentsMap = {};
    allMonths.forEach((month) => {
      appointmentsMap[month] = 0;
    });

    // Merge results
    appointments.forEach(({ month, total }) => {
      appointmentsMap[month] = total;
    });

    // Convert back to an array
    // const finalResult = Object.keys(appointmentsMap).map((month) => ({
    //   month,
    //   total: appointmentsMap[month],
    // }));

    // Convert back to an array with month names
    const finalResult = Object.keys(appointmentsMap).map((month) => ({
      month: this.getMonthName(month + '-01'), // Convert YYYY-MM to full month name
      total: appointmentsMap[month],
    }));

    return { appStats: finalResult, totalApp: totalAppointments };
  }

  async getTotalPatientsByGender(id: string) {
    const result = await this.databaseService.patient.groupBy({
      by: ['gendre'],
      _count: {
        id: true,
      },
      where: {
        doctors: {
          some: {
            id: id,
          },
        },
      },
    });

    // Initialize a map with default values for male and female
    const genderCounts = {
      male: 0,
      female: 0,
    };

    // Update the map with actual counts from the query result
    result.forEach((row) => {
      genderCounts[row.gendre.toLowerCase()] = row._count.id;
    });

    // Convert the map to an array for better readability
    const formattedResult = Object.keys(genderCounts).map((gender) => ({
      gender,
      total: genderCounts[gender],
    }));

    return formattedResult;
  }

  async getConsultationsByMonthLast6Months(id: string) {
    // Get the current date and the date 6 months ago
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);

    // get total appointments
    const totalConsultations = await this.databaseService.appointment.count();

    // Fetch appointments from the last 6 months
    const result: any = await this.databaseService.$queryRaw`
    SELECT 
      DATE_TRUNC('month', "createdAt") AS month,
      COUNT(*) AS total
    FROM "Consultation"
    WHERE "createdAt" >= ${sixMonthsAgo} AND "createdAt" <= ${currentDate} AND "doctorId" = ${id}
    GROUP BY month
    ORDER BY month;
  `;

    // Convert the result to a more usable format and handle BigInt
    const consultations = result.map((row) => ({
      month: row.month.toISOString().slice(0, 7), // YYYY-MM
      total: parseInt(row.total.toString(), 10), // Convert BigInt to Number
    }));

    // Generate all months in the last 6 months within the current year
    const allMonths = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() - i);
      if (date.getFullYear() === currentDate.getFullYear()) {
        allMonths.push(date.toISOString().slice(0, 7)); // YYYY-MM
      }
    }

    // Create a map for easy lookup and to ensure all months are covered
    const consultationsMap = {};
    allMonths.forEach((month) => {
      consultationsMap[month] = 0;
    });

    // Merge results
    consultations.forEach(({ month, total }) => {
      consultationsMap[month] = total;
    });

    const finalResult = Object.keys(consultationsMap).map((month) => ({
      month: this.getMonthName(month + '-01'), // Convert YYYY-MM to full month name
      total: consultationsMap[month],
    }));

    return { consStats: finalResult, totalApp: totalConsultations };
  }
}
