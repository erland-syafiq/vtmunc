using System.ComponentModel.DataAnnotations;

namespace VTMUNC.Models
{
    public class TermsOfServiceValidator : ValidationAttribute
    {
        public TermsOfServiceValidator() { }

        public string GetErrorMessage() => "You must agree to the terms of service";

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return new ValidationResult(GetErrorMessage());
            }
            bool isAgreeWithTerms = (bool)value;

            if (isAgreeWithTerms == false)
            {
                return new ValidationResult(GetErrorMessage());
            }

            return ValidationResult.Success;
        }
    }
}
