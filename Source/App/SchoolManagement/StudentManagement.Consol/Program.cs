using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SchoolManagement.Manager;
using SchoolManagement.Model;

namespace StudentManagement.Consol
{
    class Program
    {
        static void Main(string[] args)
        {
            StudentManager studentManager = new StudentManager();

            //Student student = new Student()
            //{
            //    Name = "Sabbir",
            //    Address = "98/C,Lake Circus",
            //    Phone = "01911831907"
            //};            
            //studentManager.Add(student);
            //Console.WriteLine("Data Saved");

            //foreach (Student getStudent in studentManager.GetStudents())
            //{
            //    Console.WriteLine(getStudent.Name);
            //}

            studentManager.Delete(3);
            Console.WriteLine(studentManager.GetStudents().Data);
        } 
    }
}
