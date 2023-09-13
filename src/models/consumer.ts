export type ConsumerRegisterDto = {
  phoneNumber: string;
  fullName: string;
  address: string;
};

export type ConsumerLoginDto = {
  phoneNumber: string;
};

export type ConsumerVerificationDto = {
  phoneNumber: string;
  otp: string;
};

export type ConsumerUpdateProfileDto = {
  fullName: string;
  address: string;
};

export type UpdateVehicleDto = {
  year: string;
  make: string;
  model: string;
};

export type Consumer = {
  phoneNumber: string;
  fullName?: string;
  address?: string;
  vehicle: Vehicle;
};

export type Vehicle = {
  id: number;
  color: string;
  engineCapacity: string;
  engineNo: string;
  fuelType: string;
  image: string;
  milage: string;
  registrationNo: string;
  transmissionType: string;
  vin: string;
  updatedVehicle: UpdateVehicleDto;
};

export type ServiceRequestType = {
  date: string;
  id: number;
  packageType: string;
  status: string;
  updatedAt: string;
  time: string;
  consumer: Consumer;
  vehicle: Vehicle;
};
