using Newtonsoft.Json;
using System.Collections;
using System.Linq.Expressions;
using System.Net.Mime;
using System.Security.Cryptography.X509Certificates;
using VTMUNC.Models;

namespace VTMUNC.ViewModels
{
    public class ApplicantsDashboard : IEnumerable<Applicant>
    {
        public List<Applicant> Applicants { get; set; }
        
        public int TotalNumberOfParticipants { get; }

        public int DaysSinceASignUp { get; }

        public List<TimeDataPoint> ParticipantsData;

        public int[] InvoiceStatusData { get; } = new int[3];
        
        public ApplicantsDashboard (List<Applicant> applicants)
        {
            Applicants = applicants;

            // Get Labels and Data for Participation Chart 
            int sum = 0;
            Applicants.Sort((a, b) => DateTime.Compare(a.Date, b.Date));
            ParticipantsData = new List<TimeDataPoint>();
            DateTime pastDate = DateTime.MinValue;
            foreach (var applicant in Applicants)
            {
                sum += applicant.DelegationSize;
                if (pastDate.ToShortDateString() != applicant.Date.ToShortDateString())
                {
                    ParticipantsData.Add(new TimeDataPoint(applicant.Date, sum));
                }
                pastDate = applicant.Date;
            }

            // Get Invoice Status List
            Applicants.ForEach(a => InvoiceStatusData[(int)a.InvoiceStatus] += a.DelegationSize);

            // Set the Total number of participants
            TotalNumberOfParticipants = sum;


            // Sort it by ascending date and get days since last sign up
            Applicants.Sort((a, b) => DateTime.Compare(b.Date, a.Date));
            DaysSinceASignUp = Applicants != null ? (int)(DateTime.Now - Applicants[0].Date).TotalDays : 0;
        }

        public string getInvoiceStatusData()
        {
            return JsonConvert.SerializeObject(InvoiceStatusData);
        }

        public string getParticipantsChartData()
        {
            return JsonConvert.SerializeObject(ParticipantsData);
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
