using EAL;
using System.Collections.Generic;
using System.Linq;
namespace DAL
{

    public class ProjectManager
    {
        IProjectContext _context;
        public ProjectManager(IProjectContext context)
        {
            _context = context;
        }
        public IEnumerable<Project> GetProjects()
        {
            return from p in _context.Projects
                   select p;
        }

        public Project GetProject(int projectId)
        {
            var foundProject = from t in _context.Projects
                               where t.ProjectId == projectId
                               select t;

            return foundProject.FirstOrDefault();
        }

        public void UpdateProject(Project modifiedProject)
        {
            var foundProject = GetProject(modifiedProject.ProjectId);
            if (foundProject == null)
            {
                _context.Projects.Add(modifiedProject);
            }
            else
            {
                foundProject.EndDate = modifiedProject.EndDate;
                foundProject.Priority = modifiedProject.Priority;
                foundProject.StartDate = modifiedProject.StartDate;
                foundProject.Project1 = modifiedProject.Project1;
                foundProject.Manager = modifiedProject.Manager;
                //foundProject.Status = modifiedProject.Status;
                _context.MarkAsModified(foundProject);
            }

            _context.SaveChanges();
        }
    }
}
