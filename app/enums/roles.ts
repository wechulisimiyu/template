export enum Role {
  USER = 1,
  EDITOR = 2,
  ADMIN = 3,
}

export type RoleName = keyof typeof Role
