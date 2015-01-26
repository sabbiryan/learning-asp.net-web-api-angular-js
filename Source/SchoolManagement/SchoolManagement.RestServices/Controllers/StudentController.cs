using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using SchoolManagement.Manager;
using SchoolManagement.Model;

namespace SchoolManagement.RestServices.Controllers
{
    public class StudentController : ApiController
    {
        StudentManager studentManager = new StudentManager();

        public ResponseModel Get()
        {
            return studentManager.GetStudents();
        }

        public ResponseModel Get(string request)
        {
            int id = JsonConvert.DeserializeObject<int>(request);
            return studentManager.GetStudentById(id);
        }

        public ResponseModel Post(Object o)
        {
            Student student = JsonConvert.DeserializeObject<Student>(o.ToString());
            return studentManager.Save(student);
        }

        public ResponseModel Delete(string request)
        {
            int id = JsonConvert.DeserializeObject<int>(request);
            return studentManager.Delete(id);
        }

    }
}
