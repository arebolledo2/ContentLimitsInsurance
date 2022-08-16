using DataAccess;
using DomainModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContentController : Controller
    {
        private IContentRepository _repository;
        public ContentController(IContentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("GetCategories")]
        public async Task<IEnumerable<Category>> GetCategories(CancellationToken token)
        {
            return await _repository.GetCategoriesWithContent(token);
        }

        [HttpPost]
        [Route("Add")]
        public async Task<ActionResult> Add(Content content, CancellationToken token)
        {
            if (content == null)
            {
                return BadRequest("Content is required");
            }

            _repository.Add(content);
            await _repository.SaveChangesAsync(token);
            return new CreatedResult("Add", content);
        }

        [HttpPost]
        [Route("Delete")]
        public async Task<ActionResult> Delete(Content content, CancellationToken token)
        {
            if (content == null || content.ContentId == 0)
            {
                return BadRequest("Content is required");
            }
            _repository.Delete(content);
            await _repository.SaveChangesAsync(token);
            return NoContent();
        }
    }
}
