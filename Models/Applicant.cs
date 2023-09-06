using System.ComponentModel.DataAnnotations;

namespace VTMUNC.Models
{
    public class Applicant
    {
        [Key]
        public int Id { get; set; }  // must be public!

        public String AdvisorEmail { get; set; }
        public String AdvisorName { get; set;}
        public String AdvisorPhone { get; set;} 
        public String AdvisorRelation { get; set;}
        public String AdvisorOtherInformation { get; set;}  
        public String HeadDelegateEmail { get; set; }
        public String HeadDelegateName { get; set;}
        public String HeadDelegatePhone { get; set;}    
        public String SchoolName { get; set; } 
        public String DelegationSize { get; set; }
        public String SchoolMailingAddress { get; set; }
        public String NamesOfDelegates { get; set; }

        //required and needs true
        //[Required][Range(typeof(bool), "true", "true", ErrorMessage = "You need to agree first!")]
        public bool IsAgreeWithTerms { get; set; }
        public String CommentsOrQuestions { get; set; } 

        public Applicant()
        {

        }



    }
}
