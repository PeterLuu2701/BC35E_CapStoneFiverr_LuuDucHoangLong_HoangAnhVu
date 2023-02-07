export interface DangNhapView {
  email: string;
  password: string;
}

export interface ThongTinNguoiDung {
  // id: number;
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
}

export interface ThongTinNguoiDungDangKi {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
}

export interface ThongTinNguoiDungUpdate {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  role: string;
  skill: string[];
  certification: string[];
  gender: boolean;
}
