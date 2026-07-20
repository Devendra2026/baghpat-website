import { grievanceSchema } from "@/types/public-grievance";

export const publicgrievancedata = grievanceSchema.array().parse([
  {
    id: 1,
    name: "Divyanshi",
    email: "divyanshi@gmail.com",
    phone: "8756651413", 
    complaint_category: "Water Leakage",
    ward: 5, 
    incident_address: "agra",
    description: "problem of water leakage in main pipe",
  },
  {
    id: 2,
    name: "sunny",
    email: "sunny@gmail.com",
    phone: "9866651413", 
    complaint_category: "Street Light",
    ward: 3, 
    incident_address: "Mathura",
    description: "Street light are not working in our street",
  },
  {
    id: 3,
    name: "ram",
    email: "ram@gmail.com",
    phone: "9656651413", 
    complaint_category: "Sanitaion",
    ward: 3, 
    incident_address: "delhi",
    description: "problem of garbage accumulation near house", 
  },
  {
    id: 4,
    name: "ram",
    email: "ram@gmail.com",
    phone: "9656651413", 
    complaint_category: "Sanitaion",
    ward: 5, 
    incident_address: "delhi",
    description: "problem of garbage accumulation near house . ikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", 
  },
]);
