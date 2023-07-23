using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace VTMUNC.ViewModels
{
    public class SecretariatAbout
    {
        // The path is the path from "\Images\."
        public string ImagePath { get; set; }

        public string Name { get; set; }

        public string Position { get; set; }

        // Description of the staff
        public string Bio { get; set; }

        public string Email { get; set; }

        public SecretariatAbout(
            string imagePath, 
            string name, 
            string position, 
            string bio, 
            string email)
        {
            ImagePath = imagePath;
            Name = name;
            Position = position;
            Bio = bio;
            Email = email;
        }
    }



}