using DomainModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ContentRepository : IContentRepository
    {
        private ContentLimitsInsuranceContext _context;

        public ContentRepository(ContentLimitsInsuranceContext context)
        {
            _context = context;
        }

        public async Task<List<Content>> All(CancellationToken token)
        {
            return await _context.Contents.ToListAsync();
        }

        public void Add(Content content)
        {
            _context.Add(content);
        }

        public void Remove(Content content)
        {
            _context.Remove(content);
        }

        public async Task SaveChangesAsync(CancellationToken token)
        {
            await _context.SaveChangesAsync(token);
        }

        public async Task<List<Category>> GetCategories(CancellationToken token)
        {
            return await _context.Categories.ToListAsync();
        }
    }
}
