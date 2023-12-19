export interface IUser {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  accounts?: any[]; // Substitua 'any[]' pelo tipo correto, se aplicável.
  sessions?: any[];
  banner: string | null; 
}