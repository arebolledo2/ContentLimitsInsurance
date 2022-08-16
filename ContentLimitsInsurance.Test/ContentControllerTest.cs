using ContentLimitsInsurance.Controllers;
using DataAccess;
using DomainModel;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace ContentLimitsInsurance.Test
{
    public class ContentControllerTest
    {
        [Fact]
        public async Task TestGetCategories()
        {
            var repository = new Mock<IContentRepository>();
            var categories = new List<Category>();
            categories.Add(new Category() { Name = "Category 1", CategoryId = 1 });
            categories.Add(new Category() { Name = "Category 2", CategoryId = 2 });
            repository.Setup(x => x.GetCategoriesWithContent(It.IsAny<CancellationToken>())).ReturnsAsync(categories);

            var controller = new ContentController(repository.Object);
            var results = await controller.GetCategories(CancellationToken.None);

            Assert.Equal(2, results.Count());
        }

        [Fact]
        public async Task TestAdd()
        {
            var repository = new Mock<IContentRepository>();
            var content = new Content() { Name = "Content 1", Value = 100 };

            var controller = new ContentController(repository.Object);
            var result = await controller.Add(content, CancellationToken.None);

            Assert.IsType<CreatedResult>(result);
            repository.Verify(x => x.Add(content), Times.Once());
            repository.Verify(x => x.SaveChangesAsync(CancellationToken.None), Times.Once());
        }

        [Fact]
        public async Task TestAdd_BadRequest()
        {
            var repository = new Mock<IContentRepository>();

            var controller = new ContentController(repository.Object);
            var result = await controller.Add(null, CancellationToken.None);

            Assert.IsType<BadRequestObjectResult>(result);
            repository.Verify(x => x.Add(It.IsAny<Content>()), Times.Never());
            repository.Verify(x => x.SaveChangesAsync(CancellationToken.None), Times.Never());
        }

        [Fact]
        public async Task TestDelete_Success()
        {
            var repository = new Mock<IContentRepository>();
            var content = new Content() { Name = "Content 1", ContentId = 100 };

            var controller = new ContentController(repository.Object);
            var result = await controller.Delete(content, CancellationToken.None);

            Assert.IsType<NoContentResult>(result);
            repository.Verify(x => x.Delete(content), Times.Once());
            repository.Verify(x => x.SaveChangesAsync(CancellationToken.None), Times.Once());
        }

        [Fact]
        public async Task TestDelete_BadRequest()
        {
            var repository = new Mock<IContentRepository>();

            var controller = new ContentController(repository.Object);
            var result = await controller.Delete(new Content() { ContentId = 0 }, CancellationToken.None);

            Assert.IsType<BadRequestObjectResult>(result);
            repository.Verify(x => x.Delete(It.IsAny<Content>()), Times.Never());
            repository.Verify(x => x.SaveChangesAsync(CancellationToken.None), Times.Never());
        }
    }
}
