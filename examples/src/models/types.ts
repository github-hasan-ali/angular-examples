export type ResponseType<T>={
  [key:string]:T;
}&{
  total:number;
  skip:number;
  limit:number;
}