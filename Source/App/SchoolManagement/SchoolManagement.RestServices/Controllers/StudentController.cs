using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SchoolManagement.Manager;
using SchoolManagement.Model;

namespace SchoolManagement.RestServices.Controllers
{
    public class StudentController : ApiController
    {
        StudentManager studentManager = new StudentManager();

        public List<Student> Get()
        {
            return studentManager.GetStudents();
        }


        public bool Post(Student student)
        {
            studentManager.Add(student);
            return true;
        }
    }
}
