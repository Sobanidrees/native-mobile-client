export type InspectorRegisterDto = {
  fullName: string;
  emiratesId: string;
  phoneNumber: string;
};

export type InspectorLoginDto = {
  phoneNumber: string;
};

export type InspectorVerificationDto = {
  phoneNumber: string;
  otp: string;
};

export type Inspector = {
  adminVerfied?: string;
  emiratesId: string;
  fullName: string;
  otpVerified?: boolean;
  phoneNumber: string;
};
