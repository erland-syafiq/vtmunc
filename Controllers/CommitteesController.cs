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
                new Committee(
                    "Harry Potter Committee", 
                    "voldemart.jpg",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mollis orci, at bibendum orci. In accumsan sit amet nisi quis mattis. Duis sodales, ante vitae venenatis vulputate, neque mi tempor massa, in dapibus eros libero ut dui. Nullam blandit libero eu orci sollicitudin, id sagittis libero congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut finibus pulvinar nunc, ac rhoncus augue consequat consequat. Aliquam euismod commodo malesuada. Etiam at eleifend tellus, sed cursus mauris.\r\n\r\nMauris dignissim finibus diam, vitae vulputate lorem feugiat vitae. Cras suscipit placerat blandit. Ut euismod, sem a viverra tincidunt, arcu tellus ornare urna, a molestie ante leo eget nisl. Praesent dictum, ipsum pulvinar facilisis tristique, ex nunc fermentum lectus, sed ultrices risus leo vel purus. Sed eget tortor vitae ante faucibus placerat eu ac arcu. Integer pulvinar nunc et massa iaculis ullamcorper. Morbi egestas eget odio sed egestas. Donec mollis facilisis augue in condimentum. Suspendisse augue elit, eleifend eu arcu eget, porta egestas mi. Vivamus rhoncus dolor vel nulla interdum ultrices a eget sem. Vivamus varius venenatis feugiat.\r\n\r\nSed bibendum felis eget lorem pharetra auctor. Donec accumsan dignissim mi, sit amet imperdiet sapien accumsan id. Duis eleifend auctor sapien. Vivamus.", 
                    "imagechair", 
                    "namechair", 
                    "poschair",
                    " Passionate cook and skilled programmer, merging the art of culinary creation with the precision of coding. I constantly seek to balance creativity and logic. As your co-DoT, I’ll be there to fix any tech related issue you have. Have an amazing conference guys <3!", 
                    "emailchair", 
                    "imagechair", 
                    "namechair", 
                    "poschair",
                    " Passionate cook and skilled programmer, merging the art of culinary creation with the precision of coding. I constantly seek to balance creativity and logic. As your co-DoT, I’ll be there to fix any tech related issue you have. Have an amazing conference guys <3!", 
                    "emailchair",
                    "Committees.pdf"
                    ),
            };
        }

        // GET: Committees
        public ActionResult Index()
        {
            return View(_committees);
        }

        // GET: Committees/<url-name>
        [HttpGet("Committees/{urlName}")]
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
