export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  image?: string;
  content: string[];
}

/**
 * Fonte editorial do blog. Novos artigos entram aqui somente após revisão
 * e autorização de publicação. A lista começa vazia para não exibir conteúdo fictício.
 */
export const posts: Post[] = [];
