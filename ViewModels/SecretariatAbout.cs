using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace VTMUNC.ViewModels
{
    public class SecretariatAbout
    {
        public string? ImagePath { get; set; }

        public string? Name { get; set; }

        public string? Position { get; set; }

        public string? Bio { get; set; }

        public string? Email { get; set; }

        public SecretariatAbout(
            string? imagePath= null, 
            string? name = null, 
            string? position = null, 
            string? bio = null, 
            string? email = null)
        {
            ImagePath = imagePath;
            Name = name;
            Position = position;
            Bio = bio;
            Email = email;
        }
    }



}