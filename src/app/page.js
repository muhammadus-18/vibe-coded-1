import { getAllPosts } from '@/lib/posts';
import HomeClient from './home-client';

export default function Page() {
  const posts = getAllPosts();
  
  return <HomeClient posts={posts} />;
}
