﻿namespace FullStackAuth_WebAPI.DataTransferObjects
{
    public class ReviewWithUserDto
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public double Rating { get; set; }
        public string BookId { get; set; }
        public UserForDisplayDto User { get; set; }





    }
}
