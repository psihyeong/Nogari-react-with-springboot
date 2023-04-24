import { axAuth, axBase } from "./axiosInstance";

interface ILoginInput {
  email: string;
  password: string;
}

// 회원가입 이메일 중복확인 api
export async function getCheckEmail({ email }: ILoginInput) {
  const response = await axBase.get(`/members/duplicate`, {
    params: {
      id: email,
    },
  });
  return response;
}

// 회원가입 api
export async function postRegister({ email, password }: ILoginInput) {
  const response = await axBase.post(`/members/signup`, {
    id: email,
    password: password,
  });
  return response;
}
// 로그인(Sign in) api
export async function postEmailLogin({ email, password }: ILoginInput) {
  const response = await axBase.post(`/members/login`, {
    id: email,
    password: password,
  });
  return response;
}
