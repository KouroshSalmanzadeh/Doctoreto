export type CommentModel = {
  id: number;
  name: string;
  relId: number;
  text: string;
  createdDay: number;
  likes: number;
  doctorRate: number;
  Related?: boolean;
};
