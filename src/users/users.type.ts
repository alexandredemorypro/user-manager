export type CreateUser<User> = User & { password: string };
export type PasswordWithUser<User> = User & {
  password: { hash: string } | null;
};
