export interface User {
  id: number;
  role: string;
  displayname: string;
}

export interface PT {
  id: number;
  displayname: string;
  categories: string[];
  avgScore: number;
  ratingNo: number;
  intro: string;
  photo: string[];
  video: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
      pt?: PT;
    }
  }
}
