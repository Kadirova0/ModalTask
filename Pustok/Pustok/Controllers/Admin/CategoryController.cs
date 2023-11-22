using Microsoft.AspNetCore.Mvc;
using Pustok.Database;
using Pustok.Database.DomainModels;
using Pustok.ViewModels.Category;
using System.Collections.Generic;
using System.Linq;

namespace Pustok.Controllers.Admin
{

    [Route("admin/categories")]
    public class CategoryController : Controller
    {
        private readonly PustokDbContext _pustokDbContext;

        public CategoryController(PustokDbContext pustokDbContext)
        {
            _pustokDbContext = pustokDbContext;
        }


        [HttpGet]
        public IActionResult List()
        
        {
            var model = _pustokDbContext.Categories.OrderByDescending(c=> c.Id).ToList();
            return View("Views/Admin/Category/List.cshtml", model);
        }


        [HttpGet("add")]
        public IActionResult Add()
        {
         
            return View("Views/Admin/Category/Add.cshtml");
        }

        [HttpPost("add")]
        public IActionResult Add(AddViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View("Views/Admin/Category/Add.cshtml");
            }

            var category = new Category
            {
                Name = model.Name, 
            };
            _pustokDbContext.Categories.Add(category);
            _pustokDbContext.SaveChanges();
            return RedirectToAction("List");
        }



    }
}
