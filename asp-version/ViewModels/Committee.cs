using System;
using System.Text.RegularExpressions;

namespace VTMUNC.ViewModels
{
    public class Committee
    {
        public string Name { get; set; }

        public string UrlName { get; set; }

        public string ImagePath { get; set; }
        
        public string ExecutiveSummary { get; set; }

        public Staff ChairA { get; set; }
        public Staff? ChairB { get; set; }

        public string BackgroundGuide { get; set; }

        public Committee(string name, string imagePath, string executiveSummary, Staff chairA, Staff chairB, string backgroundGuide)
        {
            Initialize(name, imagePath, executiveSummary, chairA, chairB, backgroundGuide);
        }

        public Committee(
            string name, 
            string imagePath, 
            string executiveSummary,
            string imagePathChairA,
            string nameChairA,
            string positionChairA,
            string bioChairA,
            string emailChairA,
            string imagePathChairB,
            string nameChairB,
            string positionChairB,
            string bioChairB,
            string emailChairB,
            string backgroundGuide)
        {
            Staff chairA = new(imagePathChairA, nameChairA, positionChairA, bioChairA, emailChairA);
            Staff chairB = new(imagePathChairB, nameChairB, positionChairB, bioChairB, emailChairB);
            Initialize(name, imagePath, executiveSummary, chairA, chairB, backgroundGuide);
        }

        public Committee(
            string name, 
            string imagePath, 
            string executiveSummary,
            string imagePathChairA,
            string nameChairA,
            string positionChairA,
            string bioChairA,
            string emailChairA,
            string backgroundGuide)
        {
            Staff chairA = new(imagePathChairA, nameChairA, positionChairA, bioChairA, emailChairA);
            Initialize(name, imagePath, executiveSummary, chairA, null, backgroundGuide);
        }


        private void Initialize(string name, string imagePath, string executiveSummary, Staff chairA, Staff? chairB, string backgroundGuide)
        {
            Name = name;
            ImagePath = imagePath;
            ExecutiveSummary = executiveSummary.Replace("\\n", "<br><br>");
            ChairA = chairA;
            ChairB = chairB;
            BackgroundGuide = backgroundGuide;

            // Removes any special characters
            name = Regex.Replace(name, "[:\\(\\),<>]", "");
            UrlName = name.Replace(" ", "-");
        }
    }
}
