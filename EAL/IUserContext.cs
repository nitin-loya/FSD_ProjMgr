using System;
using System.Data.Entity;

namespace EAL
{
    public interface IUserContext: IDisposable
    {
        DbSet<User> Users { get; }
        int SaveChanges();
        void MarkAsModified(User t);
    }
}
