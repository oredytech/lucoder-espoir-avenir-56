import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ShareContextMenu } from "@/components/blog/ShareContextMenu";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { wordpressApi } from "@/services/wordpress";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { CommentForm } from "@/components/blog/CommentForm";
import { SocialShareButtons } from "@/components/blog/SocialShareButtons";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => wordpressApi.getPostBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement de l'article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button onClick={() => navigate('/blog')} className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const author = post._embedded?.author?.[0];
  const publishDate = new Date(post.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Calculer le temps de lecture estimé
  const wordCount = post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 mots par minute

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Breadcrumb et bouton retour */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </div>
        </div>

        {/* Contenu principal avec sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article principal */}
            <article className="lg:col-span-3">
              <header className="mb-12">
                <ShareContextMenu title={post.title.rendered}>
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight cursor-context-menu tracking-tight"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </ShareContextMenu>
                
                {/* Métadonnées de l'article */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-12 text-lg">
                  {author && (
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{author.name}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5" />
                    <span>{publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <span>{readingTime} min de lecture</span>
                  </div>
                </div>

                {/* Image mise en avant */}
                {featuredImage && (
                  <ShareContextMenu title={post.title.rendered}>
                    <div className="mb-16 cursor-context-menu">
                      <img
                        src={featuredImage.source_url}
                        alt={featuredImage.alt_text || post.title.rendered}
                        className="w-full h-72 md:h-96 lg:h-[32rem] object-cover rounded-xl shadow-2xl"
                      />
                      {featuredImage.caption.rendered && (
                        <p 
                          className="text-base text-gray-600 mt-6 text-center italic font-light"
                          dangerouslySetInnerHTML={{ __html: featuredImage.caption.rendered }}
                        />
                      )}
                    </div>
                  </ShareContextMenu>
                )}
              </header>

              {/* Contenu de l'article avec typographie améliorée */}
              <div className="prose prose-xl max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight prose-h1:font-black prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-6
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:leading-tight prose-h2:font-bold prose-h2:text-blue-800
                prose-h3:text-2xl prose-h3:mb-5 prose-h3:mt-10 prose-h3:leading-tight prose-h3:font-bold prose-h3:text-blue-700
                prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-8 prose-h4:font-semibold prose-h4:text-blue-600
                prose-h5:text-lg prose-h5:mb-3 prose-h5:mt-6 prose-h5:font-semibold prose-h5:text-blue-500
                prose-h6:text-base prose-h6:mb-3 prose-h6:mt-6 prose-h6:font-medium prose-h6:text-blue-400
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-p:font-normal prose-p:tracking-wide
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-all
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-em:text-gray-600 prose-em:italic
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-gray-800 prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:shadow-sm prose-blockquote:italic
                prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6
                prose-ol:my-6 prose-ol:space-y-2 prose-ol:pl-6
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg prose-li:mb-2
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:mx-auto
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-red-600
                prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto prose-pre:shadow-lg
                prose-hr:border-gray-300 prose-hr:my-12 prose-hr:border-t-2
                prose-table:my-8 prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-md
                prose-th:bg-gray-50 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-3 prose-th:font-bold prose-th:text-left prose-th:text-gray-900
                prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>

              {/* Boutons de partage social */}
              <div className="mt-16 pt-8 border-t-2 border-gray-200">
                <SocialShareButtons title={post.title.rendered} />
              </div>

              {/* Pied de l'article */}
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-sm text-gray-500">
                    Publié le {publishDate}
                    {post.modified !== post.date && (
                      <span> • Mis à jour le {new Date(post.modified).toLocaleDateString('fr-FR')}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Partager :</span>
                    <ShareContextMenu title={post.title.rendered}>
                      <Button variant="outline" size="sm">
                        Partager cet article
                      </Button>
                    </ShareContextMenu>
                  </div>
                </div>
              </footer>

              {/* Section commentaires */}
              <div className="mt-16">
                <CommentForm postId={post.id} postTitle={post.title.rendered} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <BlogSidebar currentPostId={post.id} />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
