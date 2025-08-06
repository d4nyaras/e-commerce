export interface UserProfileInterface {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthDate: string;
  gender: string;
  phone: string;
  image: string;
  address: {
    address: string;
    city: string;
    country: string;
  };
  company: {
    name: string;
    department: string;
    title: string;
  };
  bank: {
    cardNumber: string;
    cardType: string;
    cardExpire: string;
  };
}
