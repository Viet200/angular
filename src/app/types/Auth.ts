export type TypeLogin = {
  email:string,
  password:string
};

export type typeLoginReponse = {
  accessToken:string,
  user:{
    email:string
  }
}
