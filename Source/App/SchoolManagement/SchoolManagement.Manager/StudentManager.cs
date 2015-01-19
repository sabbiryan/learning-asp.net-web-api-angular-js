using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement.Model;

namespace SchoolManagement.Manager
{
    public class StudentManager
    {
        public void Add(Student student)
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                DbSet<Student> students = db.Students;
                students.Add(student);
                db.SaveChanges();
            }

        }

        public void Delete(int id)
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                Student std = (db.Students.Where(student => student.Id == id)).FirstOrDefault();
                if (std != null)
                {
                    db.Students.Remove(std);
                    db.SaveChanges();
                }
            }
        }


        public List<Student> GetStudents()
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                return db.Students.ToList();
            }
        }
    }
}
