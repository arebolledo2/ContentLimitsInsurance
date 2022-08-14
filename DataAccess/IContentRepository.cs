using DomainModel;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface IContentRepository
    {
        void Add(Content content);
        void Delete(Content content);
        Task SaveChangesAsync(CancellationToken token);
        Task<List<Category>> GetCategoriesWithContent(CancellationToken token);
    }
}