using DomainModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess
{
    public partial class ContentsLimitInsuranceContext: DbContext
    {
        public ContentsLimitInsuranceContext()
        {
        }

        public ContentsLimitInsuranceContext(DbContextOptions<ContentsLimitInsuranceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Content> Contents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(new Category() { CategoryId = 1, Name = "Electronics" });
            modelBuilder.Entity<Category>().HasData(new Category() { CategoryId = 2, Name = "Clothing" });
            modelBuilder.Entity<Category>().HasData(new Category() { CategoryId = 3, Name = "Kitchen" });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ContentsLimitInsurance;Trusted_Connection=True");
            }
        }
    }
}
