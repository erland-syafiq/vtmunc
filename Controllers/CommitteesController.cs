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
                    "American Revolution Historical Crisis", 
                    "revolution.jpg",
                    "The date is July 4,1776, and the American Colonies have just written and passed the Declaration of Independence at the meeting of the Second Continental Congress. The Revolutionary war is in its earliest stages, and battles have broken out already in the past year at Lexington and Concord and Bunker Hill. The Continental Army has been established for only a year, and the army still appears somewhat disorganized and battles have not reached an entirely large scale yet. Though the Revolutionary War was fought primarily by the opposing American Continental and British Armies, there are other parties that have stakes in this war. The American Colonies cannot be successful without aid from their potential French allies. As the war begins to unfold, will the British squash the revolution of the self-proclaimed independent American Colonists? Can the American patriots defend their brand new republic? How will other actors, such as European powers, loyalist colonists, indigenous people, impact and intervention in the conflict? It is up to this crisis committee to determine the course of the American Revolution, and decide on the future of the establishment of the independent United States of America. \r\n",
                    "liz.jpg",
                    "Liz Mennitt", 
                    "Head Chair",
                    "Hey Guys! My name is Liz and I am a Senior at VT majoring in Political Science and minoring in Integrated Security. I am also dual enrolled in the Political Science Master’s program. I’ve been in MUN for 2 years and also participated in MUN in high school. ",
                    "lizmennitt@vt.edu", 
                    "imagechair", 
                    "a", 
                    "poschair",
                    " Passionate cook and skilled programmer, merging the art of culinary creation with the precision of coding. I constantly seek to balance creativity and logic. As your co-DoT, I’ll be there to fix any tech related issue you have. Have an amazing conference guys <3!", 
                    "emailchair",
                    "Committees.pdf"
                    ),
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
                new Committee(
                    "Barbie Committee",
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
