using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VTMUNC.ViewModels;

namespace VTMUNC.Controllers
{
    public class CommitteesController : Controller
    {

        List<Committee> _committees = new List<Committee>();

        // GET: CommitteesController
        public ActionResult Index()
        {
            return View(_committees);
        }

        // GET: CommitteesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }
    }
}
