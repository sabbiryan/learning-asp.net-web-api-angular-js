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
        public ResponseModel Save(Student student)
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                DbSet<Student> students = db.Students;
                students.Add(student);
                db.SaveChanges();
                
                return new ResponseModel();
            }            
        }

        public ResponseModel Delete(int id)
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                Student std = (db.Students.Where(student => student.Id == id)).FirstOrDefault();
                if (std != null)
                {
                    db.Students.Remove(std);
                    db.SaveChanges();
                }
                return new ResponseModel();
            }
            
        }


        public ResponseModel GetStudents()
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                List<Student> students = db.Students.ToList();
                
                return new ResponseModel()
                {
                    Data = students
                };
            }
            
        }

        public ResponseModel GetStudentById(int id)
        {
            using (SchoolManagementDBEntities db = new SchoolManagementDBEntities())
            {
                Student student = db.Students.Find(id);
                
                return new ResponseModel()
                {
                    Data = student
                };
            }
        }
    }
}
