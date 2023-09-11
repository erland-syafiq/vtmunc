namespace VTMUNC.ViewModels
{
public class TimeDataPoint
{
    public String x { get; private set; }
    public int y { get; private set; }

    public TimeDataPoint(DateTime date, int y)
    {
        this.x = date.ToString("yyyy-MM-dd");
        this.y = y;
    }


}
}
