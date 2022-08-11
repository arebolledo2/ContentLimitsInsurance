using DomainModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ContentRepository
    {
        private ContentsLimitInsuranceContext _context;

        public ContentRepository(ContentsLimitInsuranceContext context)
        {
            _context = context;
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
    }
}
