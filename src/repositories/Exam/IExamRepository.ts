export interface IExamRepositoryProps {
  name: string;
}

export interface IExamRepository {
  create(props: IExamRepositoryProps): Promise<void>;
}
