using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace TodoApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static List<string> todos = new List<string>();

        [HttpGet]
        public IEnumerable<string> Get() => todos;

        [HttpPost]
        public IActionResult Post([FromBody] TodoItem item)
        {
            todos.Add(item.Task);
            return Ok();
        }

        [HttpDelete("{task}")]
        public IActionResult Delete(string task)
        {
            todos = todos.Where(t => t != task).ToList();
            return Ok();
        }
    }

    public class TodoItem
    {
        public string Task { get; set; }
    }
}
