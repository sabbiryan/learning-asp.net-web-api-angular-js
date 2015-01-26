using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SchoolManagement.Model
{
    public class ResponseModel
    {
        public bool IsSuccess { set; get; }
        public Object Data { set; get; }
        public string Message { set; get; }

        public ResponseModel(bool isSuccess = true, Object data = null, string message = "Success")
        {
            IsSuccess = isSuccess;
            Data = data;
            Message = message;
        }
    }
}
