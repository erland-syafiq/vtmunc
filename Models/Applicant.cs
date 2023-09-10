using System.ComponentModel;
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
        [EmailAddress]
        [DisplayName("Advisor's Email")]
        public String AdvisorEmail { get; set; }

        [Required]
        [MaxLength(255)]
        [DisplayName("Advisor's Name")]
        public String AdvisorName { get; set; }

        [Required]
        [MaxLength(255)]
        [DisplayName("Advisor's Phone No.")]
        public String AdvisorPhone { get; set; }

        [Required]
        [MaxLength(255)]
        [DisplayName("Advisor's Relation to Delegation")]
        public String AdvisorRelation { get; set; }

        [MaxLength(1023)]
        [DisplayName("Advisor's Other Information")]
        public String? AdvisorOtherInformation { get; set; }

        [MaxLength(255)]
        [EmailAddress]
        [DisplayName("Head Delegate's Email")]
        public String? HeadDelegateEmail { get; set; }
        [MaxLength(255)]
        [DisplayName("Head Delegate's Name")]
        public String? HeadDelegateName { get; set; }
        [MaxLength(255)]
        [DisplayName("Head Delegate's Phone Number")]
        public String? HeadDelegatePhone { get; set; }

        [Required]
        [MaxLength(255)]
        [DisplayName("School Name")]
        public String SchoolName { get; set; }
        [Required]
        [Range(0, 255)]
        [DisplayName("Delegation Size")]
        public int DelegationSize { get; set; }

        [Required]
        [MaxLength(511)]
        [DisplayName("School Address")]
        public String SchoolMailingAddress { get; set; }

        [MaxLength(511)]
        [DisplayName("Delegate List")]
        public String? NamesOfDelegates { get; set; }

        [Required]
        [TermsOfServiceValidator]
        [DisplayName("Has Delegation Agreed to Terms of Service")]
        public bool IsAgreeWithTerms { get; set; }

        [MaxLength(1023)]
        [DisplayName("Comments or Questions")]
        public String? CommentsOrQuestions { get; set; }


    }
}
