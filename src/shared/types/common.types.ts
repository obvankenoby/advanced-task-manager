export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncData<T> {
  data: T | null;
  loading: LoadingState;
  error: string | null;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginationResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalPages: number;
}
