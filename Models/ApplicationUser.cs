using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace VTMUNC.Models
{
    public class ApplicationUser : IdentityUser
    {

        // School Info
        [Required]
        [MaxLength(255)]
        public string SchoolName { get; set; } = string.Empty;

        [Required]
        [MaxLength(255)]
        public string ClubName { get; set; } = string.Empty;

        [Required]
        [Range(0, 255)]
        public int DelegationSize { get; set; }

        // Head Delegate Information

        [MaxLength(255)]
        [Required]
        public string HeadDelegateName { get; set; } = string.Empty;


    }
}
