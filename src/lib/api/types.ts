export type Response<T, M, K extends string = 'data'> = {
  success: boolean;
  message: string;
  errors: unknown[]; // TODO: add type
  meta: M;
} & Record<K, T>;
