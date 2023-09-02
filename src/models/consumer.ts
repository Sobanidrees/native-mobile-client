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

//   export type Inspector = {
//     adminVerfied?: string;
//     emiratesId: string;
//     fullName: string;
//     otpVerified?: boolean;
//     phoneNumber: string;
//   };

// export type InspectorLogoutDto = {
//   jwtToken: null;
// };
