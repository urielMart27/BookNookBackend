using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.DataTransferObjects;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/bookdetails/{bookId}
        [HttpGet("{bookId}")]
        public IActionResult GetBookDetails(string bookId)
        {
            try
            {
                string userId = User.FindFirstValue("id");

                //Retrieve all cars from the database, using Dtos
                var reviews = _context.Reviews
                    .Include(r => r.User)
                    .Where(r => r.BookId == bookId)
                    .Select(r => new ReviewWithUserDto
                    {
                        Id = r.Id,
                        Text = r.Text,
                        Rating = r.Rating

                    })
                    .ToList();

                double averageRating = reviews.Any() ? reviews.Average(r => r.Rating) : 0;

                bool userHasFavorited = _context.Favorites.Any(f => f.UserId == userId && f.BookId == bookId);

                var bookDetailsDto = new BookDetailsDto
                {
                    Reviews = reviews,
                    AverageRating = averageRating,
                    UserHasFavorited = userHasFavorited
                };

                return StatusCode(200, bookDetailsDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }

}