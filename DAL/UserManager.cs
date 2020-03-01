using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EAL;

namespace DAL
{
    public class UserManager
    {
        IUserContext _context;

        public UserManager(IUserContext context)
        {
            _context = context;
        }
        public IEnumerable<User> GetUsers()
        {
            return from t in _context.Users
                   select t;
        }

        public User GetUser(int userId)
        {
            var foundUser = from t in _context.Users
                            where t.UserId == userId
                            select t;

            return foundUser.FirstOrDefault();
        }

        public void UpdateUser(User modifiedUser)
        {
            var foundUser = GetUser(modifiedUser.UserId);
            if (foundUser == null)
            {
                _context.Users.Add(modifiedUser);
            }
            else
            {
                foundUser.FirstName = modifiedUser.FirstName;
                foundUser.LastName = modifiedUser.LastName;
                foundUser.EmpID = modifiedUser.EmpID;
                _context.MarkAsModified(foundUser);
            }

            _context.SaveChanges();
        }

        public void DeleteUser(int userId)
        {
            var foundUser = GetUser(userId);
            _context.Users.Remove(foundUser);
            _context.SaveChanges();
        }
    }
}
