using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VTMUNC.ViewModels;

namespace VTMUNC.Controllers
{
    public class CommitteesController : Controller
    {

        private readonly List<Committee> _committees;

        public CommitteesController() {
            _committees = new List<Committee>()
            {
                // Insert new committees here e.g: new Committee(args),
                new Committee("Harry Potter", "fakeimage", "testing", "imagechair", "namechair", "poschair", "biochair", "emailchair", "imagechair", "namechair", "poschair", "biochair", "emailchair"),
            };
        }

        // GET: CommitteesController
        public ActionResult Index()
        {
            return View(_committees);
        }

        // GET: CommitteesController/Details/<url-name>
        public ActionResult Details(string urlName)
        {
            if (urlName == null)
            {
                return NotFound();
            }

            var applicant = _committees.Find(item => item.UrlName == urlName);
            if (applicant == null)
            {
                return NotFound();
            }
            return View(applicant);
        }
    }
}
