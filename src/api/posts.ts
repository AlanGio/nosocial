import useAxios from 'axios-hooks';

const API_URL = 'https://nosocial-2d85d76b3a81.herokuapp.com/posts';

interface UsePostsParams {
  params?: unknown | undefined;
}

interface UsePostsResponse {
  data: unknown;
  loading: boolean;
  error: Error | null;
}

export const useGetPosts = ({
  params = undefined
}: UsePostsParams = {}): UsePostsResponse => {
  const [{ data, loading, error }] = useAxios({
    url: API_URL,
    data: params
  });
  return { data, loading, error };
};

export const useAddPost = ({ params }: UsePostsParams): UsePostsResponse => {
  const [{ data, loading, error }] = useAxios({
    url: API_URL,
    method: 'POST',
    data: params
  });

  return { data, loading, error };
};
