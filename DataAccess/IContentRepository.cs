using DomainModel;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface IContentRepository
    {
        Task<List<Content>> All(CancellationToken token);
        void Add(Content content);
        void Remove(Content content);
        Task SaveChangesAsync(CancellationToken token);
    }
}