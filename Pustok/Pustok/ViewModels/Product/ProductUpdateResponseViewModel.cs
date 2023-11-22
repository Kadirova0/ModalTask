using Pustok.Database.DomainModels;
using System.Collections.Generic;


    public class ProductUpdateResponseViewModel : Pustok.ViewModels.Product.BaseProductViewModel
    {
        public int Id { get; set; }

        public List<Category> Categories { get; set; }
    }

