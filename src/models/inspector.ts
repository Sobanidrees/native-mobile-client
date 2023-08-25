export type InspectorRegisterDto = {
  fullName: string;
  emiratesId: string;
  phoneNumber: string;
};

export type InspectorLoginDto = {
  phoneNumber: string;
};

export type inspectorVerificationDto = {
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

// export type InspectorLogoutDto = {
//   jwtToken: null;
// };
