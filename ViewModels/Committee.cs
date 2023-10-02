using System;

namespace VTMUNC.ViewModels
{
    public class Committee
    {
        public string Name { get; set; }

        public string UrlName { get; set; }

        public string ImagePath { get; set; }
        
        public string ExecutiveSummary { get; set; }

        public Staff ChairA { get; set; }
        public Staff ChairB { get; set; }

        public Committee(string name, string imagePath, string executiveSummary, Staff chairA, Staff chairB)
        {
            Name = name;
            UrlName = name.Replace(" ", "-");
            ImagePath = imagePath;
            ExecutiveSummary = executiveSummary;
            ChairA = chairA;
            ChairB = chairB;
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
            string emailChairB)
        {
            Name = name;
            UrlName = name.Replace(" ", "-");
            ImagePath = imagePath;
            ExecutiveSummary = executiveSummary;
            ChairA = new Staff(imagePathChairA, nameChairA, positionChairA, bioChairA, emailChairA);
            ChairB = new Staff(imagePathChairB, nameChairB, positionChairB, bioChairB, emailChairB);
        }

    }
}
