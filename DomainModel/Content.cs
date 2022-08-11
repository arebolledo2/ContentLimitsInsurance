using System;
using System.Collections.Generic;
using System.Text;

namespace DomainModel
{
    public class Content
    {
        public int Id { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public decimal Value { get; set; }
    }
}
