export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Args {
  id: String;
}

export interface Context {
  contextObj: {
    name: String;
    lastName: String;
    token: String;
  };
}
