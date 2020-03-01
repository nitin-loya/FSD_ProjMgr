using System;
using System.Data.Entity;

namespace EAL
{
    public interface ITaskContext: IDisposable
    {
        DbSet<Task> Tasks { get; }
        int SaveChanges();
        void MarkAsModified(Task t);
    }
}
