using System;
using System.Collections.Generic;

namespace DomainModel
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public List<Content> Contents { get; set; }

    }
}
