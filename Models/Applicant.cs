using System.ComponentModel.DataAnnotations;

namespace VTMUNC.Models
{
    public class Applicant
    {
        [Key]
        [Required]
        public int Id { get; set; }  // must be public!

        [Required]
        [MaxLength(255)]
        public String AdvisorEmail { get; set; }

        [Required]
        [MaxLength(255)]
        public String AdvisorName { get; set; }

        [Required]
        [MaxLength(255)]
        public String AdvisorPhone { get; set; }

        [Required]
        [MaxLength(255)]
        public String AdvisorRelation { get; set; }

        [MaxLength(1023)]
        public String AdvisorOtherInformation { get; set; }

        [MaxLength(255)]
        public String? HeadDelegateEmail { get; set; }
        [MaxLength(255)]
        public String? HeadDelegateName { get; set; }
        [MaxLength(255)]
        public String? HeadDelegatePhone { get; set; }

        [Required]
        [MaxLength(255)]
        public String SchoolName { get; set; }
        [Required]
        [Range(0, 255)]
        public int DelegationSize { get; set; }

        [Required]
        [MaxLength(511)]
        public String SchoolMailingAddress { get; set; }

        [MaxLength(511)]
        public String NamesOfDelegates { get; set; }


        [Required]
        [Range(typeof(bool), "true", "true", ErrorMessage = "You need to agree first!")]
        public bool IsAgreeWithTerms { get; set; }

        [MaxLength(1023)]
        public String CommentsOrQuestions { get; set; }

        public Applicant()
        {

        }



    }
}
