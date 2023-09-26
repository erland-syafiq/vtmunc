namespace VTMUNC.ViewModels
{
    public class Committee
    {
        public string Name { get; set; }

        public string ImagePath { get; set; }
        
        public string ExecutiveSummary { get; set; }

        public Staff ChairA { get; set; }
        public Staff ChairB { get; set; }

        public Committee(string name, string imagePath, string executiveSummary, Staff chairA, Staff chairB)
        {
            Name = name;
            ImagePath = imagePath;
            ExecutiveSummary = executiveSummary;
            ChairA = chairA;
            ChairB = chairB;
        }


    }
}
