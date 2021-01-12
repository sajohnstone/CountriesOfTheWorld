using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Countries.Api.Controllers;
using Xunit;

namespace Countries.Api.Tests.Controllers
{
    public class CountriesControllerTests
    {
        [Fact]
        public void Get_OnInvoke_ReturnsExpectedMessage()
        {
            var controller = new CountriesController();

            var result = controller.Get().Result as OkObjectResult;

            result.StatusCode.Should().Be(StatusCodes.Status200OK);
            result.Value.Should().Be("All Good");
        }
    }
}
