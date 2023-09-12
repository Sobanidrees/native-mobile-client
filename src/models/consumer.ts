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
  vehicle: [];
};

