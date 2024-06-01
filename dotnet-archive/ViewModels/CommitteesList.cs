using System.Collections;

namespace VTMUNC.ViewModels
{
    public class CommitteesList : IEnumerable<Committee[]>
    {
        List<Committee[]> committees;
        List<String> committeeCategories;
        public CommitteesList()
        {
            committees = new List<Committee[]>();
            committeeCategories = new List<String>();
        }

        public void AddCommitteeGroup(String categoryName, Committee[] committeeGroup)
        {
            committees.Add(committeeGroup);
            committeeCategories.Add(categoryName);
        }

        public Committee? Find(String urlName)
        {
            foreach (Committee[] committeeGroup in committees)
            {
                Committee? committeeFound = Array.Find<Committee>(committeeGroup, (item => item.UrlName == urlName));
                if (committeeFound != null)
                {
                    return committeeFound;
                }
            }
            return null;
        }

        public int Count()
        {
            return committees.Count();
        }

        public Committee[] GetCommitteeGroup(int index)
        {
            return committees[index];
        }
        public String GetCommitteeCategory(int index)
        {
            return committeeCategories[index];
        }

        public IEnumerator<Committee[]> GetEnumerator()
        {
           return committees.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
