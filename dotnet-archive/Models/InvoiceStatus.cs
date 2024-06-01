using System.ComponentModel.DataAnnotations;
namespace VTMUNC.Models
{

    public enum InvoiceStatus
    {
        [Display(Name = "Invoice Not Sent")]
        InvoiceNotSent = 0,

        [Display(Name = "Payment Not Received")]
        PaymentNotReceived = 1,

        [Display(Name = "Payment Received")]
        PaymentReceived = 2
    }
}
