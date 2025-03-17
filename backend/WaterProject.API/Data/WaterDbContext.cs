using Microsoft.EntityFrameworkCore;

namespace WaterProject.API.Data
{
    public class WaterDbContext : DbContext
    {
        public WaterDbContext(DbContextOptions options) : base(options)
        {
        }

        //Table name
        public DbSet<Project> Projects { get; set; }
        
    }
    
 }

