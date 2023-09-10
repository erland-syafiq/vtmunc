using System.Collections;
using VTMUNC.Models;

namespace VTMUNC.ViewModels
{
    public class ApplicantsDashboard : IEnumerable<Applicant>
    {
        public List<Applicant> Applicants { get; set; }
        
        public int TotalNumberOfParticipants { get; }

        public int DaysSinceASignUp { get; }
        
        public ApplicantsDashboard (List<Applicant> applicants)
        {
            int sum = 0;
            Applicants = applicants;
            Applicants.Sort((a, b) => DateTime.Compare(b.Date, a.Date));
            Applicants.ForEach(applicant => sum += applicant.DelegationSize);

            TotalNumberOfParticipants = sum;
            DaysSinceASignUp = (int)(DateTime.Now - Applicants[0].Date).TotalDays;
        }

        public IEnumerator<Applicant> GetEnumerator()
        {
            return Applicants.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
