using System.Data.Entity;
using System;
namespace EAL
{
    public interface IProjectContext: IDisposable
    {
        DbSet<Project> Projects { get; }
        int SaveChanges();
        void MarkAsModified(Project t);
    }
}
