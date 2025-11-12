export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  tags: string[];
}

export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'> & {
  // Замена на опциональны поля
  status?: TaskStatus;
  priority?: TaskPriority;
  tags?: string[];
};

export type UpdateTaskInput = Partial<Omit<Task, 'id' | 'createdAt'>> & {
  id: string;
};

export interface TaskFilters {
  status?: TaskStatus | TaskStatus[];
  priority?: TaskPriority | TaskPriority[];
  search?: string;
  tags?: string[];
}

export type TaskSortField = 'createdAt' | 'updatedAt' | 'dueDate' | 'priority' | 'title';
export type TaskSortOrder = 'ask' | 'desk';

export interface TaskSortOptions {
  field: TaskSortField;
  order: TaskSortOrder;
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: CreateTaskInput }
  | { type: 'UPDATE_TASK'; payload: UpdateTaskInput }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'FILTER_TASKS'; payload: TaskFilters }
  | { type: 'SORT_TASKS'; payload: TaskSortOptions };
