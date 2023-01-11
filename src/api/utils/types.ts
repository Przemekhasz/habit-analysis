export type UpdateUserParams = {
  email: string;
  username: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
};

export type UpdateUserProfileParams = {
  firstName?: string;
  lastName?: string;
  age?: number;
  dob?: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};

export type UpdateUserPostParams = {
  title?: string;
  description?: string;
};
