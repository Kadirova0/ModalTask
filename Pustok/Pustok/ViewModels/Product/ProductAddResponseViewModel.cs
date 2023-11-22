using Pustok.Database.DomainModels;
using System.Collections.Generic;

public class ProductAddResponseViewModel : Pustok.ViewModels.Product.BaseProductViewModel
{

    public List<Category> Categories { get; set; }
}
