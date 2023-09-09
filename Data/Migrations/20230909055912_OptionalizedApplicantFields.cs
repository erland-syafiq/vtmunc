using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VTMUNC.Data.Migrations
{
    public partial class OptionalizedApplicantFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NamesOfDelegates",
                table: "Applicant",
                type: "nvarchar(511)",
                maxLength: 511,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(511)",
                oldMaxLength: 511);

            migrationBuilder.AlterColumn<string>(
                name: "CommentsOrQuestions",
                table: "Applicant",
                type: "nvarchar(1023)",
                maxLength: 1023,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1023)",
                oldMaxLength: 1023);

            migrationBuilder.AlterColumn<string>(
                name: "AdvisorOtherInformation",
                table: "Applicant",
                type: "nvarchar(1023)",
                maxLength: 1023,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1023)",
                oldMaxLength: 1023);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NamesOfDelegates",
                table: "Applicant",
                type: "nvarchar(511)",
                maxLength: 511,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(511)",
                oldMaxLength: 511,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CommentsOrQuestions",
                table: "Applicant",
                type: "nvarchar(1023)",
                maxLength: 1023,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(1023)",
                oldMaxLength: 1023,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AdvisorOtherInformation",
                table: "Applicant",
                type: "nvarchar(1023)",
                maxLength: 1023,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(1023)",
                oldMaxLength: 1023,
                oldNullable: true);
        }
    }
}
