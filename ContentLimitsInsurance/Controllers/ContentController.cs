﻿using DataAccess;
using DomainModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace ContentLimitsInsurance.Controllers
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
        public async Task<IEnumerable<Content>> GetContent(CancellationToken token)
        {
            return await _repository.All(token);
        }

        [HttpGet]
        [Route("GetCategories")]
        public async Task<IEnumerable<Category>> GetCategories(CancellationToken token)
        {
            return await _repository.GetCategories(token);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Add(Content content, CancellationToken token)
        {
            _repository.Add(content);
            await _repository.SaveChangesAsync(token);
            return Json("OK");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Delete(int contentId, CancellationToken token)
        {
            _repository.Remove(new Content() { ContentId = contentId });
            await _repository.SaveChangesAsync(token);
            return Json("OK");
        }
    }
}